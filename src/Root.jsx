import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";


const Root = () => {

    
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;