import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Donate";

export class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header/><hr/>
                <div className="space"><h3>Thank you for visiting our website! </h3>
                    <h4>We will have the Donation feature soon! Please email us if you have any questions/ concerns!</h4>
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Contact
