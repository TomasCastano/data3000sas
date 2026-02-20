import { useState, useEffect } from 'react'

import logoColor from '../../assets/images/logos/logo2.webp'
import logoBW from '../../assets/images/logos/logo.webp'
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded'
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined'
import AdfScannerOutlinedIcon from '@mui/icons-material/AdfScannerOutlined'
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined'

import MobileDrawer from './MobileDrawer/MobileDrawer'

import './Navbar.css'

const Navbar = ({ navTheme = 'light' }) => {
    const [open, setOpen] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll', changeBackground)
        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    let logo = (scrollNav || navTheme === 'dark') ? logoColor : logoBW
    let burgerColor = (scrollNav || navTheme === 'dark') ? '#333' : '#fff'

    return (
        <header>
            <nav className={navTheme}>
                <div className={scrollNav ? "nav-container scroll" : "nav-container"}>
                    <div className="logo-container">
                        <a href="/">
                            <img src={logo.src} alt="Logo de Data 3000 S.A.S" />
                        </a>
                    </div>
                    <div className="nav-links">
                        <a href="/">INICIO</a>

                        <div className="dropdown">
                            <a href="/servicios" className="dropbtn">SERVICIOS</a>
                            <div className="dropdown-content">
                                <a className='dropdown-link' href="/servicios#diagnostico" aria-label="Link de Servicio Diagnóstico">
                                    <QueryStatsRoundedIcon className='icon' />
                                    Diagnóstico
                                </a>
                                <a className='dropdown-link' href="/servicios#organizacion" aria-label="Link de Servicio Organización">
                                    <AllInboxOutlinedIcon className='icon' />
                                    Organización
                                </a>
                                <a className='dropdown-link' href="/servicios#digitalizacion" aria-label="Link de Servicio Digitalización">
                                    <AdfScannerOutlinedIcon className='icon' />
                                    Digitalización
                                </a>
                                <a className='dropdown-link' href="/servicios#almacenamiento" aria-label="Link de Servicio Almacenamiento">
                                    <WarehouseOutlinedIcon className='icon' />
                                    Almacenamiento
                                </a>
                            </div>
                        </div>

                        <a href="/alfresco">ALFRESCO</a>
                        <a href="/nosotros">NOSOTROS</a>
                        <a href="/contactanos">CONTÁCTANOS</a>
                    </div>
                    <div className="burger-menu">
                        <label className="hamburger">
                            <input 
                                type="checkbox" 
                                checked={open}
                                onClick={toggleDrawer(true)}
                                onChange={() => console.log('checked')}
                            />
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" style={{ stroke: burgerColor }}></path>
                                <path className="line" d="M7 16 27 16" style={{ stroke: burgerColor }}></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </nav>
            <MobileDrawer open={open} toggleDrawer={toggleDrawer} />
        </header>
    )
}

export default Navbar