import React from 'react'
import "./Header.scss"
import { useMovieContext } from "../../context/MovieContext"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"

const Header = () => {
    const { data } = useMovieContext()
    const random = Math.floor(Math.random() * 10);
    return (
        <header>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                // modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    data.action.map((e,i) => (
                        <SwiperSlide key={i}>
                            <img src={e.banner} />
                            <div className="opacity-layer"></div>
                            <h1>{e.name}</h1>
                        </SwiperSlide>
                    ))
                }



            </Swiper>
        </header>

    )
}

export default Header
