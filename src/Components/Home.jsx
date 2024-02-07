import Agncy from "./Agncy";
import { Banner } from "./Banner";
import Category from "./Category";
import Customers from "./Customers";
import Design from "./Design";
import Solution from "./Solution";

const Home = () => {
    return (
        <div>
             <Banner/>
             <Design/>
             <Category/>
             <Solution/>
             <Agncy/>
             <Customers/>
        </div>
    );
};

export default Home;