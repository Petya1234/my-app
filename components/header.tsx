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
    console.log(session)
    return session.data? (<header>
        <div className="navbar">
            <Navigation navLinks={navItems} />
            {(<Link href={"#"}>
                <button className="nav-button" onClick={() => signOut()}>Выйти</button>
            </Link>)}
            </div>
    </header>) : (<header>
        <div className="navbar">
            <Navigation navLinks={navItems} />
            {(<Link href={"/api/auth/signin"}>
                <button className="nav-button">Войти</button>
            </Link>)}
            </div>
    </header>)
};

export { Header };

