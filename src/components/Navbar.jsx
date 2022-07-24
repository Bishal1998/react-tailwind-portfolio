import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

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
            <ul className='flex'>
                {
                    links.map((link, i) => {
                        return (
                            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200' key={i}>{link.link}</li>
                        )
                    })
                }


            </ul>
        </div>
    )
}

export default Navbar