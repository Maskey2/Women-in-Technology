import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Contact.css"
import con from "../images/contact.jpg";
import {FaEnvelope, FaLocationArrow} from "react-icons/fa";

export class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container1">
                    <header className="header">
                        <h4 className="logo1">Contact Information  </h4>
                    </header>
                    </div>
                    <div align="center">
                   <img src={con} alt="Location and Number"className="contactimage"/>   
                   </div>             
                <Footer/>
            </div>
        )
    }
}
export default Contact
