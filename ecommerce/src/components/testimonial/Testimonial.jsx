import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Our Happy Customers</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">“I highly recommend this business.”
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Yogesh Jangid</h2>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">“Efficiency and punctuality are hallmarks of their service.”
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Roshni Sharma</h2>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.pinimg.com/736x/da/51/c2/da51c26fe3398b0f8314fee17a98e0e7.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">“Their staff is not only friendly but also highly skilled.”
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Riya</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial