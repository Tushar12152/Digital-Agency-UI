import Container from "../Container/Container";
import Title from "../Shared/Title";
import Customers from './Customers';

const About = () => {
    return (
      <div>
         <Container>
         <div className="mt-10">
            <Title Heading={'About Us'}></Title>
             <h3 className="p-2 bg-gray-400 rounded-full w-48 text-center mx-auto mt-4 text-white">The Secret Ingredient</h3>


             <div className="flex justify-between mt-40 gap-6">
                   <div className="w-[50%]">
                        <h1 className="font-bold text-5xl ">Content Has to Be More That Just Brilliant</h1>
                        <p className="text-gray-400 py-4 ">Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec.</p>
                        <button className="px-5 rounded-2xl text-white hover:bg-yellow-400 py-3 bg-blue-500 hover:text-black">Our Services</button>
                   </div>

                   <div className="w-[50%]">
                        <div className="flex gap-6">
                              <div>
                                    <div className="bg-gray-400 rounded-2xl p-20 text-center mt-10">
                                        <h1 className="text-red-600 font-bold text-5xl">210+</h1>
                                        <p className="">Satisfied Customers</p>
                                    </div>

                                    <div className="bg-gray-400 rounded-2xl p-20 mt-10 text-center">
                                        <h1 className="text-blue-600 font-bold text-5xl">110+</h1>
                                        <p className="">Creative Employees</p>
                                    </div>

                              </div>
                              <div>

                              <div>
                                    <div className="bg-gray-400 rounded-2xl p-20 text-center">
                                        <h1 className="text-blue-900 font-bold text-5xl">15k</h1>
                                        <p className="">Projects Finished</p>
                                    </div>

                                    <div className="bg-gray-400 rounded-2xl p-20 mt-10 text-center">
                                        <h1 className="text-violet-800 font-bold text-5xl">12+</h1>
                                        <p className="">International Awards</p>
                                    </div>
                              </div>
                        </div>
                   </div>
             </div>
             </div>

           
            
        </div>
       </Container>
       <Customers/>
      </div>
    );
};

export default About;