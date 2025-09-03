import image from '../../../assets/images/almacenamiento2.webp'
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded'
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'

import './ServiceCard.css'

const ServiceCard = () => {
    return (
        <div className="service-card">
            <div className="service-info">
                <div className="service-card-header">
                    <div className="icon-container">
                        <QueryStatsRoundedIcon />
                    </div>
                    <h3>Diagnóstico</h3>
                </div>
                <div className="service-card-body">
                    <p>Un análisis consciente permite conservar información relevante a pesar del deterioro del material en que está contenida. Una vez concluye la revisión, se procede al diseño de un informe en el que se evidencia el estado del material recibido y de las acciones que deben llevarse a cabo para su preservación.</p>
                    <ul>
                        <li><TaskAltRoundedIcon className='icon' /> Evaluación completa del estado documental</li>
                        <li><TaskAltRoundedIcon className='icon' /> Detección de riesgos y vulnerabilidades</li>
                        <li><TaskAltRoundedIcon className='icon' /> Análisis de material deteriorado</li>
                        <li><TaskAltRoundedIcon className='icon' /> Propuestas de soluciones personalizadas</li>
                        <li><TaskAltRoundedIcon className='icon' /> Informes detallados de diagnóstico</li>
                    </ul>
                    <button className="service-card-btn">Cotizar Servicio <KeyboardArrowRightRoundedIcon className="icon" /></button>
                </div>
            </div>
            <div className="service-img">
                <img src={image.src} alt="" />
            </div>
        </div>
    )
}

export default ServiceCard