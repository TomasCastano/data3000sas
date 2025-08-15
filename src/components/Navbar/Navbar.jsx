import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo2.png'
import MobileDrawer from './MobileDrawer/MobileDrawer'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }
    return (
        <>
        <nav>
            <div className={scrollNav ? "nav-container scroll" : "nav-container"}>
                <div className="logo-container">
                    <a href="/">
                        <img src={logo.src} alt="Logo a color de Data 3000 S.A.S" />
                    </a>
                </div>
                <ul>
                    <li><a href="/">INICIO</a></li>
                    <li><a href="/servicios">SERVICIOS</a></li>
                    <li><a href="/nosotros">NOSOTROS</a></li>
                    <li><a href="/contactanos">CONTÁCTANOS</a></li>
                </ul>
                <div className="burger-menu">
                    <label className="hamburger">
                        <input 
                            type="checkbox" 
                            checked={open}
                            onClick={toggleDrawer(true)}
                            onChange={() => console.log('checked')}
                        />
                        <svg viewBox="0 0 32 32">
                            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </nav>
        <MobileDrawer open={open} toggleDrawer={toggleDrawer} />
        </>
    )
}

export default Navbar