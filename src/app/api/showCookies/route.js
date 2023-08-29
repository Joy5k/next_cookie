import { headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const list = headers()
    const user_id = list.get('user_id')
    const user_email = list.get('user_email')
    return NextResponse.json({
        user_email:user_email,user_id:user_id
    })
}