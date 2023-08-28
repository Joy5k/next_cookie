import { NextResponse } from "next/server";

export function middleware(req, res) {

    if (req.nextUrl.pathname.startsWith('/pages/redirect')) {
    return NextResponse.redirect(new URL('/pages/about', req.url))

      } 
    
}
export const config={
    matcher:['/pages/:path*']
}