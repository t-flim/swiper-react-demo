// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import { images as slides } from "../../info/img-data"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

import "./Carousel.css"

// Import Required modules
import { EffectFade, Autoplay, Navigation } from "swiper"

function Carousel() {
    
    return(
        <Swiper
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            effect={"fade"}
            navigation={true}
            slidesPerView={1}
            onSlideChange={() => {console.log("slide change")}}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[EffectFade, Autoplay, Navigation]}
        >
            {slides.map((slide, i) => {
                return(
                    <SwiperSlide key={i}>
                        <h1 className="slide-title">{slide.location}</h1>
                        <img
                            src={slide.url}
                            alt={slide.location}
                            loading="lazy"
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Carousel