import image from '../../../assets/images/almacenamiento4.webp'
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded'
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'

import './ServiceCard.css'

const ServiceCard = ({ id, service }) => {

    console.log(service)

    return (
        <div id={id} className="service-card">
            <div className="service-info">
                <div className="service-card-header">
                    <div className="icon-container">
                        <QueryStatsRoundedIcon />
                    </div>
                    <h3>{service.title}</h3>
                </div>
                <div className="service-card-body">
                    <p>{service.description}</p>
                    <ul>
                        <li><TaskAltRoundedIcon className='icon' /> {service.list[0]}</li>
                        <li><TaskAltRoundedIcon className='icon' /> {service.list[1]}</li>
                        <li><TaskAltRoundedIcon className='icon' /> {service.list[2]}</li>
                        <li><TaskAltRoundedIcon className='icon' /> {service.list[3]}</li>
                        <li><TaskAltRoundedIcon className='icon' /> {service.list[4]}</li>
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