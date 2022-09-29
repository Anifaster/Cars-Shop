import React from 'react'
import './Find.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import Card from './Card'


const Find = () => {
    return (
        <div className='find'>
            <div className="heading">
                <h1>Find your drive</h1>
                <div className='text_bg'>
                    <p><span>Explore the world's largest car sharing marketplace</span></p>
                </div>
            </div>
            <div className='slider_container'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                    breakpoints={{
                        340:{
                            width:200,
                            slidesPerView:1,
                        },
                        768:{
                            width:768,
                            slidesPerView:4,
                        },
                        1040:{
                            width:1040,
                            slidesPerView:5,
                        }
                    }}
                    OnSlideChange={() => console.log('slide change')}
                    OnSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <Card image="https://cdn.motor1.com/images/mgl/33Moj/s3/2022-audi-a8-l.jpg" make='Audi'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://s.auto.drom.ru/i24273/pubs/4/89060/3858007.jpg" make='Toyota'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://avatars.mds.yandex.net/get-verba/787013/2a0000017d5cf0442afc9afdc88a2ebfbf11/cattouch" make='BMW X6'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://img1.autospot.ru/images/chevrolet/cruze//6047" make='Chevrolet'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Hyundai_grandeur_ig_fl_white_%281%29_%28cropped%29.jpg/1200px-Hyundai_grandeur_ig_fl_white_%281%29_%28cropped%29.jpg" make='Hundai'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIvm69NINZyz4X5wgjCw0U1Oi9ji9BPJFqw&usqp=CAU" make='Rols Roys'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://cdn.motor1.com/images/mgl/Jepjg/s1/chevrolet-camaro.jpg" make='Camaro'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://cdn.motor1.com/images/mgl/kLnzB/s1/4x3/2017-bugatti-chiron-first-drive.webp" make='Bugatti'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://kluz-photos.kcdn.online/webp/d4/d4b402e7-321d-4d50-8f46-7edd92aba70a/1-408x306.jpg" make='Nexia 3'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://repost.uz/storage/uploads/12738-1652697579-avto-post-material.jpeg" make='Lambargini'/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Find
