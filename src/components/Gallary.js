import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Gallary.css"
import a from "../1.jpg";
import b from "../2.jpg";
import c from "../c.jpg";
import d from "../4.jpg";
import e from "../5.jpg";
import f from "../6.jpg";
import g from "../Saugat.jpg";
import h from "../avash.jpg";
import i from "../Bibesh.png";
import j from "../Akriti.jpg";
import QnA from "../QnASession.jpg";

export class Gallary extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <h3 className="title" align="center">Resume Workshop</h3>
                    <div className="row">
                        <div className="col-md 4">
                            <img src={b} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 4">
                            <img src={c} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 4">
                            <img src={a} className="image" alt="QnA" />
                        </div>
                    </div>
                    <hr/>
                    <h3 className="title" align="center">Q&A Session with Dr Theresa Beauboef</h3>
                    <div className="row">
                        <div className="col-md 4">
                            <img src={d} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 4">
                            <img src={e} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 4">
                            <img src={f} className="image" alt="QnA" />
                        </div>
                    </div>

                    <hr/>
                    <h3 className="title" align="center">Poster Design Competition Winners</h3>
                    <div className="row">

                        <div className="col-md 3">
                            <img src={g} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 3">
                            <img src={h} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 3">
                            <img src={i} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 3">
                            <img src={j} className="image" alt="QnA" />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Gallary
