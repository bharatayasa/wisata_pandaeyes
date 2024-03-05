import React from 'react'

function HeaderPage() {
    return (
        <div>
            <div className='items-center flex min-h-screen'>
                <section className='lg:flex lg:py-10 container lg:px-0 lg:mx-auto lg:gap-20 px-7'>

                    <div className='lg:w-1/2 py-5 rounded-lg'>
                        <div className='mt-24 items-center'>
                            <div className='px-0 lg:px-0'>
                                <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                                    Explore <br /><span>The Unseen<br/></span>
                                </h1>
                                <p>Discover the Hidden Gems, Embrace the Unseen Beauty of Indonesia!</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-[500px] items-center'>
                        <div>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/Ox5X9Yzuik8"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default HeaderPage
