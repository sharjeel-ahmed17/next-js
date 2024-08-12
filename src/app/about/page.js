"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter();
    const handleClick = (name) => {
        router.push(name);
    }
    return (

        <div>about

            <button onClick={() => handleClick("/")}>go to home page</button>
            <Link href={"/about/about-teacher"}>go to about teacher page</Link>
        </div>
    )
}

export default page