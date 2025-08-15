import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import logo from '../../../assets/images/logo2.png'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import './MobileDrawer.css'

const MobileDrawer = ({ children, open, toggleDrawer }) => {

    const iOS =
        typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <SwipeableDrawer
            anchor='right'
            open={open}
            onClose={toggleDrawer(false)}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            transitionDuration={500}
        >
            <div className="drawer-container">
                <button className="drawer-close-btn" onClick={toggleDrawer(false)}><CloseRoundedIcon sx={{ fontSize: 30 }} /></button>
                <div className="drawer-header">
                    <a href="/" aria-label="Logo a color de Data 3000 S.A.S">
                        <img src={logo.src} alt="Logo a color de Data 3000 S.A.S" />
                    </a>
                    <p>Soluciones seguras y eficientes para la gestión de documentos físicos y digitales.</p>
                </div>
                <div className="drawer-list">
                    <ul>
                        <li><a href="/" aria-label="INICIO">INICIO</a></li>
                        <li><a href="/servicios" aria-label="SERVICIOS">SERVICIOS</a></li>
                        <li><a href="/nosotros" aria-label="NOSOTROS">NOSOTROS</a></li>
                        <li><a href="/contactanos" aria-label="CONTÁCTANOS">CONTÁCTANOS</a></li>
                    </ul>
                </div>
            </div>
        </SwipeableDrawer>
    )
}

export default MobileDrawer