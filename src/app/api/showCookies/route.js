import { headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export function GET(req, res) {
    const headerList = headers();
    const cookies = headerList.get('theme')
    return NextResponse.json({cookies: cookies})
}