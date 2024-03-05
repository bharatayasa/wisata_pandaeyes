import React from 'react'
import { useNavigate } from "react-router-dom";
import kaledupa2 from '../../assets/wisata/Pulau Kaledupa/Wakatobi Dive Resort.jpeg'
import kaledupa3 from '../../assets/wisata/Pulau Kaledupa/wakatobi island, southeast sulawesi.jpeg'
import kaledupa4 from '../../assets/wisata/Pulau Kaledupa/Wakatobi, Indonesia.jpeg'
import Deskripsi2 from './Deskripsi/Deskripsi2';

function Destinasi1() {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <div className='items-center flex min-h-screen'>
                    <section className='lg:flex lg:py-10 container lg:px-0 lg:mx-auto lg:gap-20 px-7'>

                        <div className='lg:w-1/2 py-5 rounded-lg'>
                            <div className='mt-24 items-center'>
                                <div className='px-0 lg:px-0'>
                                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                                    Jailolo Bay, West Halmahera, North Maluku
                                    </h1>
                                    <p>Explore pristine waters, white sandy beaches, and rich underwater life in Jailolo Bay, North Maluku. A spectacular diving destination with untouched natural panoramas, perfect for tranquility seekers.</p>
                                </div>
                                <div className='mt-5'>
                                    <button className='btn btn-primary' onClick={() => navigate('/')}>
                                        Kembali
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='w-[500px] items-center'>
                                <div>
                                    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                                        <div className="carousel-item">
                                            <img src={kaledupa4} alt="Pizza" className="rounded-box"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={kaledupa2} alt="Pizza" className="rounded-box"/>
                                        </div> 
                                        <div className="carousel-item">
                                            <img src={kaledupa3} alt="Pizza" className="rounded-box"/>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
            <Deskripsi2 />
        </div>
    )
}

export default Destinasi1
