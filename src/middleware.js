import { NextResponse } from "next/server";
import { headers } from "../next.config";

export function middleware(req, res,next) {

    // if (req.nextUrl.pathname.startsWith('/pages/redirect')) {
    //     return NextResponse.redirect(new URL('/pages/about', req.url));
    // }
 
    if (req.nextUrl.pathname.startsWith('/pages/showCookies')) {
        const reqHeader = new Headers(req.headers)
        const token = reqHeader.get('token')
        console.log('The token is: ' + token);
        if (token ==='123-abc') {
           reqHeader.set('user_id','001122')
            reqHeader.set('user_email', 'web@gmail.com')
            console.log('calculated the private route in middleware',token);
            return NextResponse.next({
                request:{headers:reqHeader}
            })
        }
    }
    
    console.log('the middleware');
    }
export const config={
    matcher:['/pages/:path*']
}