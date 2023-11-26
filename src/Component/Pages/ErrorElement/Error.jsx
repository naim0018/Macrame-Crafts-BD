import React from 'react';
import Lottie from 'react-lottie';
import error from './error.json'
import { Link } from 'react-router-dom';
const Error = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: error,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
        
    };
    return (
        <div className='flex flex-col items-center justify-center h-[calc(100vh/1.1)]'>
            <Lottie options={defaultOptions}
                height={screen}
                width={screen}
                isClickToPauseDisabled={true}
            />
            <Link to='/'>
            <button className='btn btn-accent '>Back to Home</button>
            </Link>

        </div>
    );
};

export default Error;