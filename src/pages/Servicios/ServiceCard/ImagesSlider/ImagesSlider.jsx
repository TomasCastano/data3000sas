import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css/pagination'
import "swiper/css"

import { Pagination } from 'swiper/modules'

import './ImagesSlider.css'

const ImagesSlider = ({ images }) => {
    return (
        <Swiper
            className="service-swiper"
            modules={[Autoplay, Pagination]}
            pagination
            // autoplay={{ delay: 2500 }}
            loop={true}
            bulletclass="swiper-pagination"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt="Imagen del servicio" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ImagesSlider