import { NextResponse } from "next/server";

export function GET(req, res) {
    const url = req.nextUrl.pathname;
   return NextResponse.redirect(new URL('/pages/about', req.url))
}