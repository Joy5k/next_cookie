import { headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";




export function POST(req, res) {
    const list = headers();
    const Authorization = list.get('Authorization');
  
    return NextResponse.json({ token: Authorization });
  }