import ImagesSlider from './ImagesSlider/ImagesSlider'

import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'

import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded'
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined'
import AdfScannerOutlinedIcon from '@mui/icons-material/AdfScannerOutlined'
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined'

import './ServiceCard.css'

const ServiceCard = ({ id, service }) => {

    return (
        <div id={id} className={"service-card"}>
            <div className="service-info">
                <div className="service-card-header">
                    <div className="icon-container">
                        {service.title === 'Diagnóstico' ? <QueryStatsRoundedIcon className='icon' /> : null}
                        {service.title === 'Organización' ? <AllInboxOutlinedIcon className='icon' /> : null}
                        {service.title === 'Digitalización' ? <AdfScannerOutlinedIcon className='icon' /> : null}
                        {service.title === 'Almacenamiento' ? <WarehouseOutlinedIcon className='icon' /> : null}
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
                    <a href="/contactanos" className="service-card-btn">Cotizar Servicio <KeyboardArrowRightRoundedIcon className="icon" /></a>
                </div>
            </div>
            <div className="service-img">
                <ImagesSlider client:visible images={service.images} />
            </div>
        </div>
    )
}

export default ServiceCard