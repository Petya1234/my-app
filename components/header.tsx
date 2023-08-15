import { Navigation } from "./Navigation";
import Link from "next/link";
import "./styles.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initFirebase } from "@/app/firebase/firebaseApp";

const navItems = [
    { label: "Главная", href: "/" },
    { label: "Написать мне", href: "/contacts" },
];

const Header = () => {
    initFirebase();
    return (<header>
        <div className="navbar">
            <Navigation navLinks={navItems} />
            <Link href={"/auth/sign"}>
                <button className="nav-button">Войти</button>
            </Link>
        </div>
    </header>
    )
};

export { Header };
