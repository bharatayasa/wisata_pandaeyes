import React from 'react'
import burung from '../../assets/asset1/web_image-2.jpeg'

function UnityMosaicPage() {
    return (
        <div>
                <div>
                    <div className='items-center flex min-h-screen'>
                        <section className='lg:flex lg:py-10 container lg:px-0 lg:mx-auto lg:gap-20 px-7'>

                            <div className='lg:w-1/2 py-5 rounded-lg'>
                                <div className='mt-24 items-center'>
                                    <div className='px-0 lg:px-0'>
                                        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                                            Indonesia: <br /><span>Symphathy Of<br />Deversity</span>
                                        </h1>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod fuga sit dolore vitae exercitationem, temporibus omnis, magnam natus iste reiciendis expedita, nesciunt cumque quae ex placeat animi amet sequi. Aspernatur!</p>
                                    </div>
                                    <div className='mt-5 text-lg flex gap-4 justify-center'>
                                        <button className="btn btn-neutral">Explore The Unseen</button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='w-[500px] items-center'>
                                    <img src={burung} alt="tomato" />
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
        </div>
    )
}

export default UnityMosaicPage
