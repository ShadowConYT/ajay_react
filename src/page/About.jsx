import React from 'react'
import '@/app/styles/about.css'

export const About = ({dataC}) => {

    if (!dataC) return (<div>Loading...</div>)

    const { FullName, content, role, StrawHat } = dataC && dataC.aboutPage;
    const { aboutIMG } = dataC && dataC.about;
    const {LinkedIn, Instagram} = dataC && dataC.Socials;

  return (
    <div className='h-screen flex px-[5vw] md:px-[10vw] flex-col justify-center relative bg-[#1c2430] z-0 overflow-hidden'>
        <div>
            <h1 className='text-center tracking-wide text-white mt-5 md:py-[5vh] text-xl'>Let Me Introduce Myself</h1>
        </div>

        <div className='block md:flex justify-evenly align-middle items-center'>


            <div className='relative flex justify-center md:justify-evenly w-full py-10'>
                <div>
                    
                </div>
                <div className='md:mr-10 w-52 md:w-full'>
                    <Image className='hat z-0' src={StrawHat} width={200} height={200}  />
                    <Image loading='lazy' className='aboutIMG z-10' src={aboutIMG} width={300} height={300}  />
                </div>
            </div>

            <div className='text-white'>
                <h1 className='text-5xl'>{FullName}</h1>
                <p className='text-[--secondary-color] bg-black w-fit px-2 p-1 my-2 rounded-lg'>{role}</p>
                <p className='text-[15px] '>
                    {content}
                </p>

            </div>
        </div>
    </div>
  )
}
