import{ Navigation } from './Navigation'
import Link from 'next/link';
import './styles.css'



const navItems = [
    {label: 'Главная', href: '/'},
    {label: 'Написать мне', href:'/contacts'},
];

const Header = () => {
    return (
        <header>
            <div className='navbar'><Navigation navLinks={navItems} /> <Link href={'/sign'}><button className="nav-button">Войти</button></Link></div>
        </header>
    )
}

export {Header};