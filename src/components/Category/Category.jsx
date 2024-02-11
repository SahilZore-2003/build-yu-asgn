import React from 'react'
import "./Category.scss"
import Card from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
const Category = ({ title, data }) => {
    const navigate = useNavigate()
    return (
        <div className='category'>
            <div className="title">{title}</div>
            <div className="swiper-con">
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    slidesPerView={5}
                    centeredSlides={false}
                    spaceBetween={5}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}

                    className="mySwiper"
                >
                    {
                        data.map((movie, index) => (
                            <SwiperSlide key={index} onClick={() => {
                                navigate(`/movie/${data[index].id}`);
                                window.scroll(0, 0)
                            }}>
                                <Card {...movie} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Category
