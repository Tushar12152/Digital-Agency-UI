import Container from "../Container/Container";
import Title from "../Shared/Title";

const Contact = () => {
    return (
        <div>
            <Container>
                 <Title Heading={'Contact Us'}></Title>
                 <h3 className="p-2 bg-gray-400 rounded-full w-48 text-center mx-auto mt-4 text-white">Get In Touch</h3>
            </Container>
        </div>
    );
};

export default Contact;