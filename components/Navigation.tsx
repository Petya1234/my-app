'use client'
import './navigationStyles.css'
import Link from "next/link"
import { usePathname } from 'next/navigation'




type NavLink = {
    label: string;
    href: string;
};
type Props = {
    navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
    const pathName = usePathname();

    return <>
    {navLinks.map((link) => {
        const isActive = pathName === link.href
        return (
            <div key ={link.label} className='links'><Link key ={link.label} href ={link.href} className={isActive ? 'active': ''}>{link.label}</Link></div>
        )
    })}</>;
}

export { Navigation };