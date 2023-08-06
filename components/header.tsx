import Link from "next/link"
import './styles.css'

const Header = () => {
    return (
        <header className="header">
           <Link href= "/">Home</Link>
           <Link href= "/blog">Blog</Link>
           <Link href= "/contacts">Contacts</Link>
        </header>
    )
}

export {Header};