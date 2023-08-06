import Link from "next/link";
import '@/app/contacts/styles.css'

export default function  ({
    children,
}:{
    children: React.ReactNode;
}) {
    return <div>
        <h1>About us</h1>
        <ul className="cont-link">
            <li><Link href={'/contacts/team'}>Our team</Link></li>
            <li><Link href={'/contacts/socialNetworks'}>Social networks</Link></li>
        </ul>
        {children}
    </div>
}