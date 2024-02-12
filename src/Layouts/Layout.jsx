import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div className="bg-neutral-content">
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;