import React from 'react';
import Container from "../Container/Container"

export const Banner=()=>{
     return(
     <div>
        <Container>
              <div className='flex lg:flex-row flex-col gap-6 mt-10'>
                 <div className='lg:w-[50%]'>
                      <h1 className="font-bold text-2xl lg:text-7xl text-black ">Digital Agency <br /> Business Make Big Deal.</h1>
                      <p className='my-5 text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                       <button className='py-4 px-6 text-white hover:bg-yellow-200 hover:text-black rounded-xl bg-blue-400'>Get Started</button>
                 </div>
                 <div className='lg:w-[50%]'>
                     <img className='w-full' src={'https://i.ibb.co/NmWhJ27/banner-img-1.png'} alt="" />
                 </div>
              </div>
        </Container>

     </div>)
}