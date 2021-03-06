import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            link: 'home'
        },
        {
            link: 'about'
        },
        {
            link: 'portfolio'
        },
        {
            link: 'experience'
        },
        {
            link: 'contact'
        },

    ]

    return (
        <div className='flex justify-between items-center px-4 text-white bg-black w-full h-20'>
            <div className='text-5xl font-signature mt-2 container'>Bishal</div>
            <ul className='hidden md:flex'>
                {
                    links.map((link, i) => {
                        return (
                            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200' key={i}>{link.link}</li>
                        )
                    })
                }
            </ul>
            <div className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" onClick={() => setNav(!nav)}>
                {
                    nav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>
            {
                nav &&
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
                    {
                        links.map((link, i) => {
                            return (
                                <li className='px-4 cursor-pointer capitalize py-6 text-4xl' key={i}>{link.link}</li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default Navbar