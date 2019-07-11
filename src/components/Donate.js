import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Donate";
import user from "../images/user.png";


export class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container1">
                <header className="header">
                    <h4 className="logo1">Discussions about Women in Technology!  </h4>
                </header>
                    <div className="container marpad">
                <div className=""><h3>Thank you for visiting our website! </h3>
                    <h4>We will have the Donation feature soon! Please email us if you have any questions/ concerns!</h4>
                    <h5>If you are interested in donations, please submit your name.</h5>
                    <form>
                        <label>
                            Full Name:
                            <input type="text" name="name" />
                        </label>


                    </form>
                </div></div></div>
                <Footer/>
            </div>
        )
    }
}
export default Contact
