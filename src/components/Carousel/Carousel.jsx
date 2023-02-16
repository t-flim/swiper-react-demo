// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

import "./Carousel.css"

// Import Required modules
import { EffectFade, Autoplay, Navigation } from "swiper"

function Carousel() {
    const slides = [
        {
            location: "Berlin",
            url: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            location: "London",
            url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            location: "Moscow",
            url: "https://images.unsplash.com/photo-1576413326475-ea6c788332fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        },
        {
            location: "Paris",
            url: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
    ]
    
    return(
        <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            speed={500}
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