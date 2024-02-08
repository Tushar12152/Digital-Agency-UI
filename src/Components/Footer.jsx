import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
    return (
        <Container>
            <div>
            <footer className="footer p-10 mt-10 bg-blue-400 text-white">
  <nav>
    <h1 className="font-bold text-3xl ">SUCCESS</h1>
    <p className="py-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    
   <div className="flex gap-4">
   <Link className="text-xl p-2 border border-white rounded-full w-10  hover:w-20 transition hover:duration-1000 ease-in-out" to='/'><FaFacebookF /> </Link>
    <Link className="text-xl p-2 border border-white rounded-full w-10  hover:w-20 transition hover:duration-1000 ease-in-out" to='/'><CiInstagram />
 </Link>
    <Link className="text-xl p-2 border border-white rounded-full w-10  hover:w-20 transition hover:duration-1000 ease-in-out" to='/'><IoLogoTwitter />
 </Link>
   </div>
    
   
  </nav> 
  <nav>
    <h6 className="footer-title">Pages</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Quick Links</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> 
<footer className="footer px-10 py-4 border-t bg-blue-400 text-white border-base-300">
  <aside className="items-center grid-flow-col">
  Success elementor creative agency template
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
    Copyright © 2023 KitPapa, All rights reserved.
    </div>
  </nav>
</footer>
        </div>
        </Container>
    );
};

export default Footer;