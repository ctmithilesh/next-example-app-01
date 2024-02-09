import { NextResponse } from "next/server"

export function GET() {


    return NextResponse.json({
        products: [
            {
                id: 1,
                product_name: 'iphone'
            }
        ]
    })
}