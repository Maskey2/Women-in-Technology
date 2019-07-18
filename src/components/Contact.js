import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Contact.css"
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

                    <div className="container marpad" align="center">
                    <div className='text'><FaLocationArrow /> <div className='text'>
                        <h3>Location</h3></div></div>
                    <p>Southeastern Louisiana University, 500 W University Ave, Hammond, LA 70402</p>

                    <div className='text'>
                        <FaEnvelope /> <div className='text'>
                        <h3>Email</h3></div></div>
                    <p>  slu_wit@southeastern.edu</p>
                    <p>  Nishma Maskey: nishma.maskey@selu.edu</p>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Contact
