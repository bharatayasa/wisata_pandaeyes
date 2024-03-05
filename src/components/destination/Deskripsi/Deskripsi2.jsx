import React from 'react'


function Deskripsi2() {
    return (
        <div>
            <div>
                <div className='items-center flex min-h-screen'>
                    <section className='lg:flex lg:py-10 container lg:px-0 lg:mx-auto lg:gap-20 px-7'>

                        <div className='rounded-lg'>
                            <div className=' items-center'>
                                <iframe width="600px" height="400px" 
                                    style={{ border: 0, borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.539463901998!2d127.45897568215779!3d1.0605277369546666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329b5a82be2c8a55%3A0xcc2c6e41b3f755a7!2sLokasi%20Festival%20Teluk%20Jailolo!5e0!3m2!1sen!2sid!4v1709644238315!5m2!1sen!2sid" 
                                ></iframe>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='w-[500px] items-center'>
                                <h1>
                                    <div className='text-justify'>
                                        <p>
                                        Situated in North Maluku, Jailolo Bay is reachable by flights to Leo Wattimena Airport in Ternate. From Ternate, take a boat to Jailolo for a secluded diving paradise amid pristine natural beauty.                                        </p>
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

export default Deskripsi2
