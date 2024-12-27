import { space } from 'postcss/lib/list';
import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {

    const menu = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Work",
            path: "/",
            sumMenu: [{ subTitle: "Sub1" }, { subTitle: "Sub2" }]
        },
        {
            title: "About",
            path: "/",

        },
        {
            title: "Project",
            path: "/",
        },
        {
            title: "Services",
            path: "/",
        },
    ]

    return (
        <div className='main bg-white  w-full font-sens' >
            <div className='nav max-w-7xl mx-auto py-4 border-b-2 border-[#ddd1c1] flex items-center justify-between'>
                <div className='logo flex items-end font gap-[1px]'>
                    <h2 className='text-3xl font-semibold tracking-tighter'>Mukul Joshi</h2>
                    <span className='text-[#fc481e] text-5xl font-semibold'>.</span>
                </div>
                {/* nav links */}
                <div className='flex gap-6 text-sm font-medium'>
                    {
                        menu.map((item, index) => (
                            <div className='flex items-center'>
                                <a href="" key={index}>{item.title}</a>
                                {index == 1 &&
                                    <span className='text-[#fc481e] text-xl font-bold'>
                                        <MdOutlineKeyboardArrowDown />

                                    </span>
                                }

                            </div>

                        ))

                    }
                </div>
                <button className='border-zinc-900 border px-4 py-2 font-semibold text-sm '>
                    Let's chat
                </button>
            </div>
        </div>
    )
}

export default Navbar
