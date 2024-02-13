import swal from "sweetalert";
import Container from "../Container/Container";
import Title from "../Shared/Title";

const Contact = () => {

    const handleSubmit=e=>{
        e.preventDefault()
        swal('Success','Thank you for your valueable message','success')
    }

    return (
        <div>
            <Container>
                 <Title Heading={'Contact Us'}></Title>
                 <h3 className="p-2 bg-gray-400 rounded-full w-48 text-center mx-auto mt-4 text-white">Get In Touch</h3>


                <div className="lg:flex gap-6 mt-10">
                     <div className="lg:w-[50%] mb-10">
                        <h1 className="font-bold text-5xl ">Have a <span className="text-blue-400">Cool Project?</span> Get in touch!</h1>

                     </div>
                     <div className="lg:w-[50%]">
                        <form onSubmit={handleSubmit}>
                         <input className="border w-[70%] p-4 ml-10 rounded-lg mb-5" placeholder="Name" type="text" name="name" id="" required/>
                         <input className="border w-[70%] p-4 ml-10 rounded-lg mb-5" placeholder="Phone" type="number" name="phone" id="" required/>
                         <input className="border w-[70%] p-4 ml-10 rounded-lg mb-5" placeholder="Email" type="text" name="email" id="" required/>
                         <input className="border w-[70%] p-4 ml-10 rounded-lg mb-5" placeholder="Subject" type="text" name="subject" id="" required/>

                         <textarea placeholder="How Can we help you? feel free to get in touch!!" className="border w-[70%] p-4 ml-10 rounded-lg mb-5" name="" id="" cols="50" rows="5"></textarea>

                         <button className="px-6 py-4 hover:bg-blue-400 text-white bg-orange-300  ml-10 rounded-lg">Send Message</button>
                         </form>
                     </div>
                </div>



            </Container>
        </div>
    );
};

export default Contact;