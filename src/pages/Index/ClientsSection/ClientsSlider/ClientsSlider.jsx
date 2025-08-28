import { useState, useEffect, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import assbasaludLogo from '../../../../assets/images/clients/assbasalud.webp'
import cairoLogo from '../../../../assets/images/clients/cairo.webp'
import camaraChinchinaLogo from '../../../../assets/images/clients/camara-chinchina.webp'
import camaraManizales from '../../../../assets/images/clients/camara-manizales.webp'
import contraloriaCaldasLogo from '../../../../assets/images/clients/contraloria-de-caldas.webp'
import cootrachecLogo from '../../../../assets/images/clients/cootrachec.webp'
import diagnostimedLogo from '../../../../assets/images/clients/diagnostimed.webp'
import edsaLogo from '../../../../assets/images/clients/edsa.webp'
import emasLogo from '../../../../assets/images/clients/emas.webp'
import empresaAraucaLogo from '../../../../assets/images/clients/empresa-arauca.webp'
import fundacionLukerLogo from '../../../../assets/images/clients/fundacion-luker.webp'
import gaxoLogo from '../../../../assets/images/clients/gaxo.webp'
import gensaLogo from '../../../../assets/images/clients/gensa.webp'
import gobernacionLogo from '../../../../assets/images/clients/gobernacion.webp'
import lastraLogo from '../../../../assets/images/clients/lastra.webp'
import marcelaMarquezLogo from '../../../../assets/images/clients/marcela-marquez.webp'
import multilac from '../../../../assets/images/clients/multilac.webp'
import pacifico3Logo from '../../../../assets/images/clients/pacifico3.webp'
import peoplecontactLogo from '../../../../assets/images/clients/peoplecontact.webp'
import santaSofiaLogo from '../../../../assets/images/clients/santa-sofia.webp'
import sesLogo from '../../../../assets/images/clients/ses.webp'
import sjLogo from '../../../../assets/images/clients/sj.webp'
import smilingtekLogo from '../../../../assets/images/clients/smilingtek.webp'

import 'swiper/css'
import "./ClientsSlider.css"

const ClientsSlider = () => {
    
    const clients = [
        gensaLogo,
        gobernacionLogo,
        pacifico3Logo,
        camaraManizales,
        contraloriaCaldasLogo,
        fundacionLukerLogo,
        emasLogo,
        assbasaludLogo,
        cairoLogo,
        camaraChinchinaLogo,
        cootrachecLogo,
        diagnostimedLogo,
        edsaLogo,
        empresaAraucaLogo,
        gaxoLogo,
        lastraLogo,
        marcelaMarquezLogo,
        multilac,
        peoplecontactLogo,
        santaSofiaLogo,
        sesLogo,
        sjLogo,
        smilingtekLogo,
    ]

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)

        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const slidesPerView = useMemo(() => {
        return windowWidth > 850 ? 5 : windowWidth > 615 ? 4 : 3
    }, [windowWidth])

    return (
        <>
            <Swiper
                spaceBetween={15}
                slidesPerView={slidesPerView}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="clients-swiper"
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <img src={client.src} alt={client} decoding="async" loading="lazy" fetchPriority="auto" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default ClientsSlider