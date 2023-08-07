import Link from "next/link"
import './styles.css'

const Header = () => {
    return (
        <header className="header">
           <Link href= "/">Главная</Link>
           <Link href= "/blog">Факты</Link>
           <Link href= "/contacts">Написать мне</Link>
        </header>
    )
}

export {Header};