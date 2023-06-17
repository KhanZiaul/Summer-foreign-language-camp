import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../assets/Images/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='lg:w-[80vw] lg:h-[80vh] mx-auto' src={error} alt="error-image" />
            <div className='flex justify-center h-[20vh]'>
                <Link to='/'>
                    <button className='btn btn-primary'>BACK TO HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;