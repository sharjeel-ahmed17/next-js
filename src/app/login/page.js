"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter();
    const navigate = (item) => {
        router.push(`/login/${item}`);
    }
    return (
        <div>login page


            <Link href={"/"}>go to home page</Link>

            <button onClick={() => navigate("login-teacher")}>go to teacher login</button>
            <button onClick={() => navigate("login-teacher")}>go to student login</button>
        </div>
    )
}

export default page