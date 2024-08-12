import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div>
            <h1>common layout login screen</h1>

            <ul>
                <li>
                    login navbar
                </li>
                <li>
                    <Link href="/login" >go to main login</Link>
                </li>
                <li>
                    <Link href="/login/login-student" >go to student login</Link>
                </li>
                <li>
                    <Link href="/login/login-teacher" >go to teacher  login</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}