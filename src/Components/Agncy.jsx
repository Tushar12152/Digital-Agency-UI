import Container from "../Container/Container";

const Agncy = () => {
    return (
        <div>
             <Container>
              <div className='flex lg:flex-row-reverse mt-40 flex-col gap-12 items-center '>
                 <div className='lg:w-[50%]'>
                    <h3 className="text-2xl font-medium text-yellow-400 pb-8">Our Agency</h3>
                      <h1 className="font-bold text-2xl lg:text-7xl text-black ">Best Online Agency Since 2023</h1>
                      <p className='my-5 text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                       <button className='py-4 px-6 text-white hover:bg-yellow-200 hover:text-black rounded-xl bg-blue-400'>Learn More</button>
                 </div>
                 <div className='lg:w-[50%]'>
                     <img className='w-full' src={'https://i.ibb.co/JmwsYR6/About-img-Jim-Fahad-Digital-1.png'} alt="" />
                 </div>
              </div>
        </Container>

        </div>
    );
};

export default Agncy;