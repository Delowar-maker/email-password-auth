import { Outlet } from "react-router-dom";
import Header from "../Header/header";



const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;