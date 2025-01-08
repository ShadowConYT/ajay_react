'use cors'
import React from 'react'

import { motion } from 'framer-motion';
import '../styles/homepage.css';

import { TiSocialInstagramCircular,
TiSocialLinkedinCircular,
TiSocialTwitterCircular,
TiSocialFacebookCircular } from "react-icons/ti";
import Works from '../components/Works';

const Homepage = ({ dataC, homePageProjects }) => {
const {name, about, aboutIMG, BGimg, resume } = dataC;

const socials = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/ajay.developer/',
      icon: <TiSocialInstagramCircular className='text-5xl' />
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/theajay06/',
      icon: <TiSocialLinkedinCircular className='text-5xl' />
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/ajaysuresh',
      icon: <TiSocialTwitterCircular className='text-5xl' />
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/',
      icon: <TiSocialFacebookCircular className='text-5xl' />
    }
  ]

const ResumeLink = () => {
  window.open('/Resume.pdf', "_blank");
}

return (
  <>
    <section>
      <div className='h-[90vh] relative bg-[#1c2430] overflow-x-visible inset-0 flex flex-col md:justify-center lg:justify-normal items-center'>
        <div className='z-10 mt-16 lg:mt-0 md:mx-0 relative w-[90vw] md:w-[75vw] grid grid-cols-1 items-center lg:grid-cols-2 justify-center align-middle h-full '>
          <div className='relative flex md:flex-col md:justify-center'>
            <div className=''>
              <div className='font-[montserrat] font-semibold flex text-white text-2xl text-center justify-start md:justify-normal  md:text-4xl lg:bottom-0 m-0 leading-none'>
                <motion.span
                  initial = {{opacity:0, y: 50, duration: 5}}
                  animate = {{opacity:1, y:0, duration: 5}}
                  whileInView={{opacity:1, y:0, duration: 5, transition: {delay:0.5}}}
                  className=''>Hi</motion.span>
                <motion.span 
                  initial = {{opacity:0, y: 50, duration: 5}}
                  animate = {{opacity:1, y:0, duration: 5}}
                  whileInView={{opacity:1, y:0, duration: 5, transition: {delay:0.5}}}
                  className='p-0 m-0 top-1'>

                  <picture>
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" className='w-6 md:w-8 lg:w-9' />
                  </picture>
                </motion.span>
                <motion.span 
                  initial = {{opacity:0, y: 50, duration: 5}}
                  animate = {{opacity:1, y:0, duration: 5}}
                  whileInView={{opacity:1, y:0, duration: 5, transition: {delay:0.8}}}
                  className='pl-2'>, I am</motion.span>
                <motion.span 
                  initial = {{opacity:0, y: 50, duration: 5}}
                  animate = {{opacity:1, y:0, duration: 5}}
                  whileInView={{opacity:1, y:0, duration: 5, transition: {delay:1.1}}}
                  className={`lg:bottom-0 pl-1.5 md:pl-3 mb-5  text-[--secondary-color] font-extrabold uppercase`} >{name}</motion.span>
              </div>
              <motion.p
                initial = {{opacity:0, y: 50, duration: 5}}
                animate = {{opacity:1, y:0, duration: 5}}
                whileInView={{opacity:1, y:0, duration: 5, transition: {delay:1.4}}}
                className='text-justify md:text-left md:w-auto text-gray-200 tracking-wider'>
                {about}
              </motion.p>
              <motion.div 
                initial = {{opacity:0, y: 50, duration: 5}}
                animate = {{opacity:1, y:0, duration: 5}}
                whileInView={{opacity:1, y:0, duration: 5, transition: {delay:1.7}}}
                className='flex justify-center md:block'>
                  <button className="button text-center mt-2 md:mt-5" onClick={ResumeLink}>
                    Resume
                  </button>
              </motion.div>
            </div>
          </div>
          <div className='socialContainer hidden lg:block'>
            {socials.map((social, index) => {
              return (
                <div key={index} className='socials hidden lg:block' ><a target='_blank' href={social.link}>{social.icon}</a></div>
              )
            })}
          </div>
          <div style={{pointerEvents:'none'}} className='relative whole md:h-full overflow-x-visible flex lg:justify-center md:block'>
            <motion.div
              className='circle md:h-screen lg:h-full transform md:translate-x-1/2 top-[12vh] right-[13vw] md:right-0 translate-x-1/3 -translate-y-1/3 md:-translate-y-1/2 lg:transform-none lg:translate-x-0 lg:translate-y-0'>
              <img src={BGimg} width={500} height={500} alt='profile-bg' className='bg lg:hidden' />
              <img src={aboutIMG} width={500} height={500} alt='profile' className='absolute m-0 p-0 lg:blur-0 lg:bottom-0 scale-x-[-1] min-w-[170px] max-w-[23vw] md:max-w-none md:min-w-none  md:w-60 lg:w-full translate-x-[20%] md:translate-x-[15%] object-scale-down lg:max-h-full z-0' />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <section className='mt-20'>
      <Works projects={homePageProjects} />
    </section>
  </>
)
}

export default Homepage;