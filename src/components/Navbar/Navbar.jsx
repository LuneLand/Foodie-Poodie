import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { BiChevronDown, BiRestaurant } from 'react-icons/bi'
import Button from '../Layouts/Button'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

const Navbar = () => {
    const [menu , setMenu] = useState(false);

    const handleChange =() => {
        setMenu(!menu); 
    };

    const closeMenu = () => {
        setMenu(false)
    };
    return (
        <div className='fixed w-full'>
            <div>
                <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <span>
                            <BiRestaurant size={32} />
                        </span>
                        <h1 className='text-xl font-semibold'>Foodie Poodie</h1>
                    </div>
                    <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Home</Link>
                        <div className='relative group'>
                            <div className='flex items-center gap-1'>
                            <Link to='popular' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Popular</Link>
                            <BiChevronDown className='cursor-pointer' size={25} />
                            </div>
                            <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
                                <li> <Link to='popular' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Burger</Link></li>
                                <li> <Link to='popular' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Pasta</Link></li>
                                <li> <Link to='popular' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Pizza</Link></li>
                                <li> <Link to='popular' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Salad</Link></li>
                            </ul>
                        </div>
                        <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>About</Link>
                        <Link to='reviews' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Reviews</Link>
                        <Button title='Login'/>
                    </nav>
                    <div className='md:hidden flex items-center'>
                        {menu ?
                            (<AiOutlineClose size={25} onClick={handleChange}/>):(
                                <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                            )
                        }
                    </div>
                </div>
                <div className={` ${ menu ? "translate-x-0" : "-translate-x-full" } lg:hidden flex flex-col absolute
                bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full
                h-fit transition-transform duration-300`}>
                    <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Home</Link>
                    <Link to='popular' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Popular</Link>
                    <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>About</Link>
                    <Link to='reviews' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>reviews</Link>
                    <Button title='Login'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar
