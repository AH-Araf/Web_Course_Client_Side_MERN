import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const a = useLoaderData();
    console.log(a);
    const { name, image_url, details} =a;
    
    return (
        <div className='single-course-container'>
            <h2 className='d-flex justify-content-center mb-4 bg-success p-2 rounded rounded-4 border border-4 border-info text-light'>Enjoy Your Premium Access</h2>
            <p className='write'>{name}</p>
            <img src={image_url} alt="" />
            <i><b><p>{details}</p></b></i>
            
        </div>
    );
};

export default CheckOut;