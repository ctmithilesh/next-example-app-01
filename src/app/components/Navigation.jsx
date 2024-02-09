import Link from 'next/link'
import React from 'react'
import '../assets/css/navigation.css'
const Navigation = () => {
    return (
        <>
            <ul className="nav">
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/products'>
                        Products
                    </Link>
                </li>
                <li>
                    <Link href='/counter'>
                        Counter
                    </Link>
                </li>
                <li>
                    <Link href='/cats'>
                        Cats
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navigation
