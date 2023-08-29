import { NextResponse } from "next/server";
import { headers } from "../next.config";

export function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith('/pages/redirect')) {
        return NextResponse.redirect(new URL('/pages/about', req.url));
    }
    if (req.nextUrl.pathname.startsWith('/')) {
        const reqHeader = new Headers(req.headers)
        const token = reqHeader.get('token')
        if (token ==='123-XYZ') {
           reqHeader.set('user','Joy')
            reqHeader.set('user_email', 'web@gmail.com')
            reqHeader.set('newToken','Bearer'+token)
            return NextResponse.next({
                request:{headers:reqHeader}
            })
        }
    }
}
