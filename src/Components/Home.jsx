import Agncy from "./Agncy";
import { Banner } from "./Banner";
import Category from "./Category";
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
        </div>
    );
};

export default Home;