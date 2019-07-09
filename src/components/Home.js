import * as React from "react";
import Footer from "./Footer";
import logo from "../images/logo.png";
import {NavLink} from "react-router-dom";
import Header from "./Header";
import MainContent from "./MainContent";

export class Home extends React.Component {
    render() {
        return (
            <div className="bg">
               <Header/>
                <MainContent/>
                <Footer/>
            </div>
        )
    }
}
export default Home
