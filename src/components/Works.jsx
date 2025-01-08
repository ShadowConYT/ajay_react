import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Works = ({projects}) => {

    const image = 'https://placehold.co/1920x750';
    const mockWorks = [
        // {title: "Accend's Billder", description: 'A billing system that uses AI to predict the bill amount based on the items scanned', image: image, tags: ["Python", "Java"], link: 'https://youtu.be/1Q2e1J8X1ZQ'},
        // {title: "Alokah's E-Commerce", description: "An E-Commerce store with payment gateway and user authentication", image: image, tags: ["Python", "Java", "JS"], link: 'https://youtu.be/1Q2e1J8X1ZQ'},
        // {title: "Muscle Monitor", description: "A fitness app that uses AI to track your workout and suggest improvements", image: image, tags: ["Python", "Jio"], link: 'https://youtu.be/1Q2e1J8X1ZQ'},
        // {title: "Portfolio", desc: "A portfolio website that showcases my works and projects", img: image, techStack: ["Python", "Luck"], link: 'https://youtu.be/1Q2e1J8X1ZQ'},
    ]

    mockWorks.push(...projects);

    const WorksCard = ({title, description, image, tags, link, delay}) => {
        return (
            <motion.div 
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5, delay:delay, type: 'spring'}}
                exit={{opacity: 0, x: 100}}
                className='md:w-[35vw] lg:w-[35vw] border-[#2f3c50] border-[1px] bg-[#00000] flex flex-col rounded-2xl items-center justify-center'>
                <motion.div>
                    <img src={image} alt={title} className='rounded-t-2xl' />
                </motion.div>
                <motion.div className='p-2 text-white mx-3'>
                    <motion.div className='border-b-[1px] border-[#2f3c50] mb-1 p-2 flex justify-between'>
                        <motion.div className='flex flex-col flex-wrap'>
                            <h2 className='font-bold'>{title}</h2>
                            <p className='flex flex-wrap gap-1'>
                                {
                                    tags.map((tech, index) => {
                                        return <span key={index} className='bg-[#2f3c50] text-xs text-yellow-400 rounded-md px-3 py-1'>{tech}</span>
                                    })
                                }
                            </p>
                        </motion.div>
                        <a href={link} className='text-white'>
                            <MdArrowOutward />
                        </a>
                    </motion.div>
                    <p>{description}</p>
                </motion.div>
            </motion.div>
        )
    }

    return (
        <motion.div className='min-h-dvh w-[75vw] my-20'>
            <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <motion.div>
                    <motion.div className='flex flex-col'>
                        <motion.div className='text-left lg:mb-10'>
                            <h1 className='text-white font-extrabold text-4xl'>Projects Undertaken</h1>
                            <p className='text-[--sub-text-color]'>Here&apos;s Some of my project I worked on.</p>
                            <a href='/projects' className='text-yellow-400 flex items-center'>Explore More <MdOutlineKeyboardDoubleArrowRight /></a>
                        </motion.div>
                        {
                            mockWorks.map((work, index) => {
                                return (
                                    <motion.div key={index}
                                        className={`flex ${index % 2 == 0 ? 'hidden' : 'block'} my-10`}
                                    >
                                        <WorksCard {...work} delay={index - 0.5} />
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                </motion.div>
                <motion.div>
                    {
                        mockWorks.map((work, index) => {
                            return (
                                <motion.div key={index} 
                                    className={`flex ${index % 2 == 1 ? 'hidden' : 'block'} ${index == 0 ? 'mb-10' : 'my-10'}`}
                                >
                                    <WorksCard {...work} delay={index - 0.5} />
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Works