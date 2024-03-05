import React from 'react'
import image2 from '../../assets/asset1/web_image-2.jpeg'

function FaqPage() {
    return (
        <div className='min-h-screen'>

            <div className='flex justify-center'>
                <div className='font-bold text-3xl mt-20'>
                    <h1>
                        <span>FAQ WHY INDONESIA</span><br />
                    </h1>
                </div>
            </div>

            <section className='lg:flex container lg:px-0 lg:mx-auto lg:gap-20 px-7'>
                <div className='lg:w-1/2 rounded-lg'>
                    <div className='mt-10 items-center'>
                        <div className='px-0 lg:px-0'>
                            <img src={image2} alt="" />
                        </div>
                    </div>
                </div>

                <div className='flex mt-5'>
                    <div className=' items-center'>

                        <div className="w-full collapse collapse-arrow bg-base-200 mb-1">
                            <input type="radio" name="my-accordion-2" defaultChecked /> 
                            <div className="collapse-title text-m font-medium">
                                <h3 className='font-semibold'>
                                    What are some ideas for activities that can be done on Kaledupa Island, Wakatobi National Park, Southeast Sulawesi?
                                </h3>
                            </div>
                            <div className="collapse-content text-sm"> 
                                <p>
                                    - You can snorkel or dive to explore the beauty of coral reefs and diverse marine life.
                                </p>
                                <p>
                                    - Interact with local people, learn about Bajo tribal culture, and perhaps take part in traditional activities.
                                </p>
                                
                            </div>
                        </div>

                        <div className="w-full collapse collapse-arrow bg-base-200 mb-1">
                            <input type="radio" name="my-accordion-2" defaultChecked /> 
                            <div className="collapse-title text-m font-medium">
                                <h3 className='font-semibold'>
                                    What are the ideas for activities in Jailolo Bay, West Halmahera, North Maluku?
                                </h3>
                            </div>
                            <div className="collapse-content text-sm"> 
                                <p>
                                    - You can dive to enjoy the rich and stunning underwater beauty.
                                </p>
                                <p>
                                    - Sunbathe on the white sandy beach while enjoying the beautiful natural scenery.
                                </p>
                            </div>
                        </div>

                        <div className="w-full collapse collapse-arrow bg-base-200 mb-1">
                            <input type="radio" name="my-accordion-2" defaultChecked /> 
                            <div className="collapse-title text-m font-medium">
                                <h3 className='font-semibold'>
                                    What activities can you do at Weekuri Lake, West Sumba, East Nusa Tenggara?
                                </h3>
                            </div>
                            <div className="collapse-content text-sm"> 
                                <p>
                                    - You can swim or just soak your feet in the calm and clear lake.
                                </p>
                                <p>
                                    - Picnic by the lake while enjoying the natural beauty of the surroundings.
                                </p>
                            </div>
                        </div>

                        <div className="w-full collapse collapse-arrow bg-base-200 mb-1">
                            <input type="radio" name="my-accordion-2" defaultChecked /> 
                            <div className="collapse-title text-m font-medium">
                                <h3 className='font-semibold'>
                                    What about ideas for activities at Madakaripura Waterfall, Probolinggo, East Java?
                                </h3>
                            </div>
                            <div className="collapse-content text-sm"> 
                                <p>
                                    - Explore the area around the waterfall by trekking to get a closer view.
                                </p>
                                <p>
                                    - Capture the moment with beautiful photos around the waterfall.
                                </p>
                            </div>
                        </div>

                        <div className="w-full collapse collapse-arrow bg-base-200 mb-1">
                            <input type="radio" name="my-accordion-2" defaultChecked /> 
                            <div className="collapse-title text-m font-medium">
                                <h3 className='font-semibold'>
                                    What can you do in Kampung Naga, Tasikmalaya, West Java?
                                </h3>
                            </div>
                            <div className="collapse-content text-sm"> 
                                <p>
                                    - Take a cultural tour to understand more deeply the traditions and life of the Sundanese traditional people.
                                </p>
                                <p>
                                    - Interact with locals and try traditional activities.
                                </p>
                            </div>
                        </div>

                        <div className="w-full collapse collapse-arrow bg-base-200 mb-1">
                            <input type="radio" name="my-accordion-2" defaultChecked /> 
                            <div className="collapse-title text-m font-medium">
                                <h3 className='font-semibold'>
                                    What are some interesting activity ideas in Goa Gong, Pacitan, East Java?
                                </h3>
                            </div>
                            <div className="collapse-content text-sm"> 
                                <p>
                                    - Take a cave tour to enjoy the natural wonders of stalactites and stalagmites.
                                </p>
                                <p>
                                    - Attend a natural "concert" performance by listening to the roar of the water.
                                </p>
                            </div>
                        </div>

                        <div className="w-full collapse collapse-arrow bg-base-200 mb-1">
                            <input type="radio" name="my-accordion-2" defaultChecked /> 
                            <div className="collapse-title text-m font-medium">
                                <h3 className='font-semibold'>
                                    What about Bama Beach, Donggala, Central Sulawesi?
                                </h3>
                            </div>
                            <div className="collapse-content text-sm"> 
                                <p>
                                    - Relax on the beach while enjoying the stunning sunset.
                                </p>
                                <p>
                                    - Swim or snorkel to explore the underwater beauty.
                                </p>
                            </div>
                        </div>

                        <div className="w-full collapse collapse-arrow bg-base-200 mb-1">
                            <input type="radio" name="my-accordion-2" defaultChecked /> 
                            <div className="collapse-title text-m font-medium">
                                <h3 className='font-semibold'>
                                    What activities can you do in the Pariaman Mangrove Forest, West Sumatra?
                                </h3>
                            </div>
                            <div className="collapse-content text-sm"> 
                                <p>
                                    - Take a wooden trip on the water to get an immersive experience in the mangrove forest.
                                </p>
                                <p>
                                    - Take an educational tour about the role of mangrove forests in protecting marine ecosystems.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default FaqPage
