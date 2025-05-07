import React from 'react'
import img from "../../../public/img.png"
import { FaPlay } from "react-icons/fa";
import { motion } from "motion/react"
import { slideBottom, slideUp } from '../../Utility/animation';

const Hero = () => {
    return (
        <motion.div
            className='flex justify-center'>
            <div className='container pbp'>
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
                    <div className='flex flex-col justify-center py-14 md:py-0 !space-y-7'>
                        <motion.h1
                            variants={slideBottom(0.2)}
                            initial="initial"
                            animate="animate"
                            className='text-5xl font-bold leading-[60px]'>Consistency with the focus gives you the <span className='text-[#ff0000]'>
                                confidence
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
                        <div className='flex gap-9'>
                            <motion.button
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                className='primary-btn'>Order Now</motion.button>
                            <motion.button
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className='flex items-center primary-btn gap-1'>
                                <FaPlay />
                                Watch Now </motion.button>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='flex justify-center items-center'>
                        <img src={img} alt="" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero