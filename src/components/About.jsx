import React from 'react';
import aboutimg from '../assets/aboutimg-PhotoRoom-removebg-preview.png'
const About = () => {
    return (
        <div className='p-10 bg-stone-900 flex justify-center items-center text-white'>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-64 h-64 rounded-full border-2 bg-gray-900 order-2 lg:order-1'>
                    <img className=' mx-auto my-6 ' src={aboutimg} alt="" />
                </div>
                <div className='order-1 lg:order-2'>
                    s
                </div>
            </div>
        </div>
    );
};

export default About;