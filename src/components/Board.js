import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import QnA from "../QnASession.jpg";
import "./Board.css"

export class Board extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container bgg">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h3>Our Board 2018-2019</h3>
                        <h5>Officers</h5>
                        <ul><li>President: Nishma Maskey</li>
                            <li>Secretary: Pratikshya Timalsina</li>
                            <li>Treasurer: Sijan Tiwari</li>
                            <hr/>
                            <h5>Faculty Advisors</h5>
                            <li>Dr Lisa Kuhn, Professor, Math Department</li>
                            <li>Ms Allanagh Sewell, Professor, Computer Science Department</li>
                        </ul>

                        {/*<img src={QnA} className="App-logo responsive" alt="QnA" />*/}
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Board
