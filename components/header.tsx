import{ Navigation } from './Navigation'
import './styles.css'

const navItems = [
    {label: 'Главная', href: '/'},
    {label: 'Написать мне', href:'/contacts'},
];

const Header = () => {
    return (
        <header>
           <Navigation navLinks={navItems} />
        </header>
    )
}

export {Header};