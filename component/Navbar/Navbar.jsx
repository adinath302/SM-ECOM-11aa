import React, { useState } from 'react'
import { IoReorderThreeSharp } from "react-icons/io5";
import { motion } from "motion/react"


const Navbar = () => {

    const [Showmenu, setShowmenu] = useState(false);

    const HandleOnclick = () => {
        setShowmenu(!Showmenu)
    }

    return (
        <nav className='bg-[gray] h-[5rem]'>
            <div className='max-w-[132rem] h-[5rem] relative 
        !m-auto'>
                <div className='grid grid-cols-[0.5fr_1fr] h-[5rem] items-center !px-[3.2rem]'>
                    {/* LOGO  */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-bold text-2xl uppercase">
                        Logo
                    </motion.div>
                    <nav className={Showmenu ? "menu-mobile" : "menu-web"}>
                        <motion.ul
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex gap-9 justify-end font-bold text-1xl'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href=""></a>Help</li>
                        </motion.ul>
                    </nav>
                    <div className='md:hidden text-end cursor-pointer'>
                        <button
                            onClick={HandleOnclick}
                            className='text-3xl cursor-pointer'><IoReorderThreeSharp />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar