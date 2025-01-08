import React, { useEffect, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useRef } from 'react';
import '../styles/navbar.css';

const Navbar = () => {


    const navRef = useRef();
    const showBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    useEffect(() => {
        let btnContainer = document.getElementById('nav');
        let btns = btnContainer.getElementsByClassName('aTag');
    
        for (let i = 0; i < btns.length; i++){
            btns[i].addEventListener("click", function(){
                let current = document.getElementsByClassName('active');
    
                if (current.length > 0){
                    current[0].className = current[0].className.replace(' active', '');
                }
    
                this.className += ' active';
            })
        }
    }, []);

    const closeMenu = () => {
        navRef.current.classList.remove('responsive_nav');
    }


    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 1024);
        }

        // Run once to set initial state
        handleResize();

        // Set up event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
        


return (
    <div className='head !flex !justify-between relative md:w-[75vw] lg:mt-10'>
            <div className='xs:flex:md lg:opacity-100 md:w-auto'>
                <span className={`flex text-xl text-yellow-300`}>
                    {`{ `}<span className={`text-white attena-font`}>&nbsp;AJ&nbsp;</span>{' }'}
                </span> 
            </div>
            <nav id='nav' className='font-roz' ref={navRef}> 
                    <a className='aTag' href="#" onClick={closeMenu}>Home</a>
                    {/* <a className='aTag' href="#about" onClick={closeMenu} >About</a> */}
                    {/* <a className='aTag' href="#" onClick={closeMenu}>Education</a> */}
                    <a className='aTag' href="#projects" onClick={closeMenu}>Works</a>
                    <a className='aTag' href="#" onClick={closeMenu}>Contact</a>
                    {isMobileView ? 
                        <button className='nav-btn nav-close-btn text-white' onClick={showBar}>
                                <FaTimes />
                        </button> : null  
                    }
            </nav>
            {isMobileView ? 
                    <button onClick={showBar} className="text-white mr-2 md:!p-0 nav-btn">
                            <FaBars />
                    </button>
                    : null
            }
    </div>
)
}

export default Navbar