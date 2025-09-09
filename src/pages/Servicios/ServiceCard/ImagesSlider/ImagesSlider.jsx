import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import "swiper/css"

import './ImagesSlider.css'

const ImagesSlider = ({ images }) => {
    return (
        <Swiper className="service-swiper" modules={[Autoplay]} autoplay={{ delay: 2500 }} loop={true}>
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt="Imagen del servicio" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ImagesSlider