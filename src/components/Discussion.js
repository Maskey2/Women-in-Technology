import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Discussion.css"

export class Discussion extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <hr/>
                <div className="space"><h3>Thank you for visiting our website! </h3>
                <h4>We will have the Discussion postings soon! Please email us if you have any suggestions/ concerns!</h4>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Discussion
