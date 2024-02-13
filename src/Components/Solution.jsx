import Container from "../Container/Container";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Solution.css';

// import required modules
import { Pagination } from 'swiper/modules';

  const solutions=[
    {
       id:1,
       img:'https://i.ibb.co/SPS4mtc/download.png' 
    },
    {
       id:2,
       img:'https://i.ibb.co/SPS4mtc/download.png' 
    },
    {
       id:3,
       img:'https://i.ibb.co/SPS4mtc/download.png' 
    },
    {
       id:4,
       img:'https://i.ibb.co/SPS4mtc/download.png' 
    },
    {
       id:5,
       img:'https://i.ibb.co/SPS4mtc/download.png' 
    },
    {
       id:6,
       img:'https://i.ibb.co/SPS4mtc/download.png' 
    },
    {
       id:7,
       img:'https://i.ibb.co/SPS4mtc/download.png' 
    },
    {
       id:8,
       img:'https://i.ibb.co/SPS4mtc/download.png' 
    },
    {
       id:9,
       img:'https://i.ibb.co/SPS4mtc/download.png' 
    },
    
   
  ]



const Solution = () => {
    return (
        <div className="mt-10">
            <Container>
             <h1 className="text-center font-bold mb-5 text-2xl ">We are Already Build Solution for...</h1>

             <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
           <div className="flex flex-row items-center mt-24">
           {
               solutions.map(item=><div key={item.id}>
                 <SwiperSlide>
                     <img className=" h-20 " src={item?.img} alt="" />
                     </SwiperSlide>
               </div>)
            }
           </div>
     
       
      </Swiper>




            </Container>
        </div>
    );
};

export default Solution;