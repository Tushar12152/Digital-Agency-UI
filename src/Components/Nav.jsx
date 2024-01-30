import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

const Nav = () => {
    return (
        <div>
             <Container>
             <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex items-center justify-center gap-6">
      <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-400 text-md" : "text-md" }> Home</NavLink>

<NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-400 text-md" : "text-md" }> About</NavLink>




<li className="text-md">
<details>
  <summary>Services</summary>
  <ul className="p-2">
  <NavLink to="/web" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-400 text-md" : "text-md" }> Web development</NavLink>
  </ul>
</details>
</li>

<NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-400 text-md" : "text-md" }> Contact</NavLink>



      </ul>
    </div>
    <a className=" text-3xl text-blue-400 font-bold hidden lg:block">Success</a>
  </div>
  
  <div className="navbar-end">
  <a className="  lg:hidden text-blue-400 font-bold text-3xl ">Success</a>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center justify-center gap-6">
       
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-400 text-md" : "text-md" }> Home</NavLink>

        <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-400 text-md" : "text-md" }> About</NavLink>
        
      


        <li className="text-md">
        <details>
          <summary>Services</summary>
          <ul className="p-2">
          <NavLink to="/web" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-400 text-md" : "text-md" }> Web development</NavLink>
          </ul>
        </details>
      </li>

      <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-400 text-md" : "text-md" }> Contact</NavLink>
    
      
    
      
     
    </ul>
  </div>
  </div>
             </div>
             </Container>
        </div>
    );
};

export default Nav;