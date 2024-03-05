import React from 'react'

function Deskripsi5() {
    return (
        <div>
            <div>
                <div className='items-center flex min-h-screen'>
                    <section className='lg:flex lg:py-10 container lg:px-0 lg:mx-auto lg:gap-20 px-7'>

                        <div className='rounded-lg'>
                            <div className=' items-center'>
                                <iframe width="600px" height="400px" 
                                    style={{ border: 0, borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9370731409276!2d107.98977701015781!3d-7.360950972399297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ab81533e7381%3A0xaad3d7b0b36b33e9!2sKampung%20Naga!5e0!3m2!1sen!2sid!4v1709644654290!5m2!1sen!2sid"                                ></iframe>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='w-[500px] items-center'>
                                <h1>
                                    <div className='text-justify'>
                                        <p>
                                        Located in West Java, Kampung Naga is accessible by flights to Husein Sastranegara International Airport in Bandung. From Bandung, travel by road to Tasikmalaya, then take local transport to reach this cultural gem.
                                        </p>
                                    </div>
                                </h1>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default Deskripsi5
