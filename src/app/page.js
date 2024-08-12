"use client"
import Link from 'next/link';
import React, { useState } from 'react'
// import { useRouter } from 'next/navigation';
const page = () => {
  // const router = useRouter();
  const [name, setName] = useState("anil");
  const apple = () => {
    // alert(item)
    setName("sharjeel")
  }

  const InnerComp = () => {
    return <h2>Inner Component</h2>
  }
  const navigate = (name) => {
    router.push(name)
  }
  return (

    <div>

      {/* <User title="user 1" />
      <User title="usman" />
      <User title="arsalan" />
      <User title="moin" /> */}
      {/* chapter 2 */}
      <div>
        {/* <button onClick={() => alert("hello world")}>hello</button> */}
        {/* <button onClick={() => apple("banana")}>print fruit</button> */}

        {/* <h1>my name is {name}</h1> */}
        {/* <button onClick={() => apple()}>change name </button> */}
        {/* <InnerComp /> */}
        {/* {InnerComp()} */}
        <Link href={"/about"}>go to about</Link>
        <br />
        <Link href={"/contact"}>go to contact</Link>
        <br />
        <Link href={"/login"}>go to login </Link>
        <br />
        <Link href={"/signup"}>go to sign up</Link>
        <br />



        <button onClick={() => navigate("/login")}> go to login page</button>
        <button onClick={() => router.push("/about")}> go to about page</button>
      </div>
    </div>

  )
}

export default page


const User = ({ title }) => {
  return (
    <div>users list
      <h1>{title}</h1>
    </div>
  )
}