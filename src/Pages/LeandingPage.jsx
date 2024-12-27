import React from 'react'
import { HiArrowSmUp } from "react-icons/hi";

const LeandingPage = () => {

    return (
        <header className='leanding_page flex w-full'>
            {/* left section */}
            <div className='w-1/2 bg-white h-[90vh] relative'>
                {/* main content */}
                <div className=' w-full h-full px-24 absolute top-20'>
                    <div className='flex items-center gap-9'>
                        <h1 className='text-5xl font-semibold font-sans flex items-center justify-center'>Hi! I Am </h1><span className='bg-[#5462ff] text-white flex justify-center items-center px-8 py-2 rounded-full font-semibold font-sans text-xl'>UI/UX</span>
                    </div>
                    <h1 className='text-5xl font-semibold font-sans mt-5'>Mukul Joshi</h1>
                    <p className='mt-6 font-semibold text-zinc-600'>Design user interface for over <strong>7 years</strong><br />as product desginer</p>
                    <div className='mt-8 w-full flex items-center'>
                        <button className='border-white text-white  border bg-[#fc481e] px-8 py-3 font-semibold text-sm '>Hire Me</button>
                        <div className='flex items-center'>
                            <button className='ml-12 text-black font-semibold'>Projects</button>
                            <HiArrowSmUp className='text-2xl rotate-45' />
                        </div>
                    </div>

                    <div className='mt-6'>
                        <h3 className='text-2xl font-semibold'>+84</h3>
                        <p className='text-xs font-light'>Clients on Work</p>
                        <p className='text-xs font-light'>worldwide</p>
                    </div>

                    <div className='flex mt-6 gap-16'>
                        <div>
                            <h3 className='text-2xl font-semibold'>572</h3>
                            <p className='text-xs font-light'>Project Done</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Contact</h3>
                            <p className='text-xs font-light'>Hello@gamil.com</p>
                        </div>


                    </div>
                </div>
                <div className="absolute bottom-0 py-6 footer bg-black w-full  text-white">
                    <div className='ml-24 flex justify-between items-center'>
                        <div>
                            <p>Project<br />
                                Statistics 2024
                            </p>
                            <button className='border-none text-black mt-2 border bg-yellow-400 px-6 py-2 font-semibold text-xs '>Know More</button>
                        </div>
                        <div className='mr-40 px-12 py-3 w-[20vw] flex flex-col gap-4'>
                            <div className='flex underline-offset-2 justify-between items-center border-b-2 border-gray-700'>
                                <p>Website Design</p>
                                <p>96</p>
                            </div>
                            <div className='flex underline-offset-2 justify-between items-center border-b-2 border-gray-700'>
                                <p>Mobile App Design</p>
                                <p>80</p>
                            </div>
                            <div className='flex underline-offset-2 justify-between items-center border-b-2 border-gray-700'>
                                <p>Brand Design</p>
                                <p>74</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* right section */}
            <div className='w-1/2 bg-[#ddd1c1] h-screen/[400px] relative'>
                <div>
                    <h2 className='absolute top-20 left-1/2 -translate-x-1/2 text-xl '>Create you site in <strong>Figma <br/>Sketch</strong> or <strong>XD</strong> </h2>
                </div>
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
                    <img src="Hero.png" alt="hero.png" className='w-[100vw] h-[70vh]' />
                </div>
                <form action="/">

                <div className=' absolute top-[45%] left-[25%] figma w-16 h-16 bg-white rounded-full flex justify-center items-center object-cover object-contain'>
                    <img src="figma.png" alt="fingma image" className=' w-10 h-10 bg-cover' />
                </div>
                <div className=' absolute top-[35%] right-[25%] figma w-16 h-16 bg-white rounded-full flex justify-center items-center'>
                    <img src="dimond.png" alt="fingma image" className=' w-10 h-10 bg-cover' />
                </div>
                <div className=' absolute top-[65%] right-[30%] figma w-16 h-16 bg-white rounded-full flex justify-center items-center'>
                   <h1>XD</h1>
                </div>

                <div className='flex bg-white w-1/2 absolute bottom-20 left-1/2 -translate-x-1/2 justify-between items-center px-2 gap-2'>
                    <input type="text" placeholder='Subescribe my Newsletter' className='border-none focus:outline-none w-full text-sm' />
                    <span className='rotate-90 bg-black text-white w-14 h-14 flex justify-center items-center text-xl '>
                        <HiArrowSmUp/>
                    </span>
                </div>
                </form>
            </div>
        </header>
    )
}

export default LeandingPage
