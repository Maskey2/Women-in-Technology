import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Gallary.css"
import a from "../1.jpg";
import b from "../2.jpg";
import c from "../c.jpg";
import d from "../4.jpg";
import e from "../5.jpg";
import x from "../x.jpg";
import y from "../y.jpg";
import z from "../z.jpg";
import p from "../p.jpg";
import q from "../q.jpg";
import r from "../r.jpg";
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
                <hr/>
                <div className="container">
                    <h3 className="title" align="center">Resume Workshop</h3>
                    <div className="row" align="center">
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
                    <h3 className="title" align="center">Q&A Session with Dr Theresa Beaubouef</h3>
                    <div className="row" align="center">
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
                        <div className="row" align="center">
                            <div className="col-md 4">
                                <img src={x} className="image" alt="QnA" />
                            </div>
                            <div className="col-md 4">
                                <img src={y} className="image" alt="QnA" />
                            </div>
                            <div className="col-md 4">
                                <img src={z} className="image" alt="QnA" />
                            </div>
                    </div>
                    <hr/>
                    <h3 className="title" align="center">Fundraising by T-Shirts</h3>
                    <div className="row" align="center">

                        <div className="col-md 4">
                            <img src={p} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 4">
                            <img src={q} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 4">
                            <img src={r} className="image" alt="QnA" />
                        </div>
                    </div>

                    <hr/>
                    <h3 className="title" align="center">Poster Design Competition Winners</h3>
                    <div className="row" align="center">

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
