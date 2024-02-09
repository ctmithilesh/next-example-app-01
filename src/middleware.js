import { NextResponse } from "next/server";


export function middleware(request) {

    if (request.nextUrl.pathname.startsWith('/')) {
        return NextResponse.rewrite(new URL('/counter', request.url))
    }

    // if (request.nextUrl.pathname.startsWith('/products')) {
    //     return NextResponse.rewrite(new URL('/products-2', request.url))
    // }


}

export const config = {
    matcher: [
        '/',
    ]
}