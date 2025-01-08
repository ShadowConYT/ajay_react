import React from 'react';
import '../styles/loader.css';

const Loader = () => {
  return (
    <div className='h-screen bg-black'>
        <div className="fire">
            <div className="fire-left">
                <div className="main-fire"></div>
                <div className="particle-fire"></div>
            </div>
            <div className="fire-center">
                <div className="main-fire"></div>
                <div className="particle-fire"></div>
            </div>
            <div className="fire-right">
                <div className="main-fire"></div>
                <div className="particle-fire"></div>
            </div>
            <div className="fire-bottom">
                <div className="main-fire"></div>
            </div>
        </div>
    </div>
  )
}

export default Loader