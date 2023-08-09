import{ Navigation } from './Navigation'
import './styles.css'

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Contacts', href:'/contacts'},
];

const Header = () => {
    return (
        <header className="header-block">
           <Navigation navLinks={navItems} />
        </header>
    )
}

export {Header};