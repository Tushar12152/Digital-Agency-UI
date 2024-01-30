import React from 'react';
import Container from '../Container/Container';

const Design = () => {
    return (
        <Container>
             <div className='mt-10'>
                 <h3 className='font-semibold text-xl text-center text-red-400 py-5'>What We Do</h3>
                 <h1 className=' text-2xl lg:text-6xl font-bold text-center text-black'>We Make <span className='text-blue-400'>Designs</span>
                    <br />  that Lead and Inspire.</h1>
                    <p className='text-lg  text-center text-gray-600 py-5'>
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. <br />
                   Lorem Ipsum Has Been The Industry's Standard.
                    </p>
             </div>
        </Container>
    );
};

export default Design;