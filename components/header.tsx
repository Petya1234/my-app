import'./styles.css'
import Link from "next/link";
import { Navigation } from "./Navigation";
import { signOut, useSession } from "next-auth/react";


const navItems = [
    { label: "Главная", href: "/" },
    { label: "Написать мне", href: "/contacts" },
];

const Header = () => {
    const session = useSession();
    console.log(session)
    return session.data? (
        <div className='navbar'>
            <Navigation navLinks={navItems} />
            {(<Link href={"#"}>
                <button className='nav_button' onClick={() => signOut()}>Выйти</button>
            </Link>)}
            </div>) : (
        <div className='navbar'>
            <Navigation navLinks={navItems} />
            {(<Link href={"/api/auth/signin"}>
                <button className='nav_button'>Войти</button>
            </Link>)}
            </div>)
};

export {Header};

