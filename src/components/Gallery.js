import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Gallery.css"
import a from "../images/1.jpg";
import b from "../images/2.jpg";
import c from "../images/c.jpg";
import d from "../images/4.jpg";
import e from "../images/5.jpg";
import x from "../images/x.jpg";
import y from "../images/y.jpg";
import z from "../images/z.jpg";
import p from "../images/p.jpg";
import q from "../images/q.jpg";
import r from "../images/r.jpg";
import f from "../images/6.jpg";
import g from "../images/Saugat.jpg";
import h from "../images/avash.jpg";
import i from "../images/Bibesh.png";
import j from "../images/Akriti.jpg";
import p4 from "../images/p4.jpeg";
import p2 from "../images/p2.jpeg";
import p3 from "../images/p3.jpeg";
import dxc1 from "../images/dxc2.jpg";
import dxc2 from "../images/dxc3.jpg";
import dxc3 from "../images/dxc4.png";

export class Gallery extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div className="container1">
                    <header className="header">
                        <h4 className="logo1">Gallery   </h4>
                    </header>
                    <div className="container marpad">
                    <h3 className="title" align="center">DXC Technology Visit</h3>
                    <div className="row" align="center">
                        <div className="col-md 4">
                            <img src={dxc1} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 4">
                            <img src={dxc2} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 4">
                            <img src={dxc3} className="image" alt="QnA" />
                        </div>
                    </div>
                    <hr/>


                    <h3 className="title" align="center">Communication and Public Speaking Workshop</h3>
                    <div className="row" align="center">
                        <div className="col-md 4">
                            <img src={p4} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 4">
                            <img src={p2} className="image" alt="QnA" />
                        </div>
                        <div className="col-md 4">
                            <img src={p3} className="image" alt="QnA" />
                        </div>
                    </div>
                    <hr/>

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
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Gallery
