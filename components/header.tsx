import "./styles.css";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { signOut, useSession } from "next-auth/react";


const navItems = [
    { label: "Главная", href: "/" },
    { label: "Написать мне", href: "/contacts" },
];

const Header = () => {
    const session = useSession();

    return (<header>
        <div className="navbar">
            <Navigation navLinks={navItems} />
            {session?.data && (<Link href={"/"}>
                <button className="nav-button" onClick = {() => signOut()}>Выйти</button>
            </Link> )} 
            :
            {(<Link href={"/auth/sign"}>
                <button className="nav-button">Войти</button>
            </Link>)}


            
        </div>
    </header>
    )
};

export { Header };