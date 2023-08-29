import { headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";




export function GET(req, res) {
    const list = headers();
    const Authorization = list.get('token');
    const user = list.get('user');
    const newToken = list.get('newToken');
  
    return NextResponse.json({ token: Authorization,user:user,newToken:newToken });
  }