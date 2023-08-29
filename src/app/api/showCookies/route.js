import { headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const list = headers()
    const Bearer = list.get('Bearer')
    return NextResponse.json({
        Bearer:Bearer,
    })
}