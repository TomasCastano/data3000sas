import { useEffect, useState, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css/pagination'
import "swiper/css"

import { Pagination } from 'swiper/modules'

import './ImagesSlider.css'

const ImagesSlider = ({ images }) => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)

        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const slidesPerView = useMemo(() => {
        return windowWidth > 1050 ? 1 : windowWidth > 615 ? 3 : 2
    }, [windowWidth])

    return (
        <Swiper
            className="service-swiper"
            modules={[Autoplay, Pagination]}
            pagination
            autoplay={{ delay: 2500 }}
            loop={true}
            bulletclass="swiper-pagination"
            spaceBetween={15}
            slidesPerView={slidesPerView}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt="Imagen del servicio" loading="lazy" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ImagesSlider