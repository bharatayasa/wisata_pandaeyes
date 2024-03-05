import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import kaledupa from '../../assets/wisata/Pulau Kaledupa/Wakatobi Dive Resort.jpeg'
import northMaluku from '../../assets/wisata/Air Terjun Madakaripura/Air terjun Madakaripura adalah suatu air terjun yang terletak di Kecamatan Lumbang, Probolinggo.jpeg'

function ExploreTheUnseenPage() {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen'>

            <div className='flex justify-center'>
                <div className='font-bold text-3xl mt-20'>
                    <h1>
                        <span>Discover 8 Unique Destinations to</span><br />
                        <span>Experience in Wonderful Indonesia</span>
                    </h1>
                </div>
            </div>

            <section className='lg:flex container lg:px-0 lg:mx-auto lg:gap-20 px-7'>

                <div className='lg:w-1/2 rounded-lg'>
                    <div className='mt-40 items-center'>
                        <div className='text-4xl font-bold flex'>
                            <h1>
                                ini untuk judul 
                            </h1>
                        </div>
                        <div className='px-0 lg:px-0'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quod voluptas, id saepe, est nobis dolore libero incidunt modi quo, hic corrupti ratione sapiente perspiciatis. Optio assumenda autem odit hic laboriosam consectetur obcaecati. Accusantium id blanditiis natus repellendus aliquam debitis, quasi rerum nulla doloremque consequatur eum deleniti, voluptatibus repudiandae. Sequi molestiae consectetur natus sint recusandae illum cum excepturi, nam, quam placeat facilis nostrum illo perspiciatis repellat delectus, maxime necessitatibus laboriosam.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex mt-10'>
                    <div className='w-[500px] items-center'>
                        <>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow]}
                                className="mySwiper">

                                <SwiperSlide>
                                    <div>
                                        <img src={kaledupa} />
                                        <div className='flex justify-center'>
                                            <div className='font-semibold text-2xl mb-3 mt-2'>
                                                <h1>Kaledupa</h1>
                                            </div>
                                        </div>
                                        <div className='flex justify-center'>
                                            <button className='btn btn-primary' onClick={() => navigate('/destinasi1')}>
                                                Explore
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div>
                                        <img src={northMaluku}/>
                                        <div className='flex justify-center'>
                                            <div className='font-semibold text-2xl mb-3 mt-2'>
                                                <h1>judul</h1>
                                            </div>
                                        </div>
                                        <div className='flex justify-center'>
                                            <button className='btn btn-primary' onClick={() => navigate('/destinasi2')}>
                                                Explore
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ExploreTheUnseenPage
