import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nishma from "../images/Nishma.jpg";
import "./Board.css"
import p from "../images/p.jpg"
import user from "../images/user.png";
import Ashlynn from "../images/Ashlynn.jpeg"


export class Board extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div className="row" align="center">
                    <div className="col-md-6 ">
                        <div className="space">
                        <img src={Nishma} className="image" alt="Nishma Maskey" />
                        <div className="container"> <p className="title">President: Nishma Maskey</p>
                        <p>Nishma Maskey is a senior majoring in Computer Science and minoring in Mathematics. She is also a graphic designer. She is a aspiring web developer. She is a current web developer
                            intern at Texas Commission in Environment Quality in Austin, Texas. She likes to watch movies, play guitar and be artistic in leisure time.</p></div></div>
                    </div>
                    <div className="col-md 6"><div className="space">
                        <img src={Ashlynn} className="image" alt="Ashlynn Martell" />
                        <div className="container"> <p className="title">Vice President: Ashlynn Martell</p>
                            <p>Ashlynn is a current sophomore working on a Computer Science degree in the Scientific concentration. She is also Treasurer of ACM-W, a member of ACM,
                                and an intern at ITinspired in Baton Rouge. When she isn’t staring at a computer screen she enjoys spending time with her dachshund Rocky and enjoying nature.</p></div></div>
                    </div>
                </div>
                <div className="row" align="center" >
                    <div className="col-md 6" ><div className="space">
                        <img src={user} className="image" alt="Sijan Tiwari" />
                        <div className="container"> <p className="title">Sijan Tiwari</p></div></div>
                    </div>
                    <div className="col-md 6"><div className="space">
                        <img src={user} className="image" alt="Pratikshya Timalsina" />
                        <div className="container"> <p className="title">Pratikshya Timalsina</p></div></div>
                    </div>
                </div>
                <div className="row" align="center" >
                    <div className="col-md 6" ><div className="space">
                        <img src={user} className="image" alt="Quynh Vu" />
                        <div className="container"> <p className="title">Quynh Vu</p></div></div>
                    </div></div>

<hr/>
                <h3 align="center">Faculty Advisors</h3>
                <div className="row" align="center" >
                    <div className="col-md 6" ><div className="space">
                        <img src={user} className="image" alt="Dr Lisa Kuhn" />
                        <div className="container"> <p className="title">Dr Lisa Kuhn</p></div></div>
                    </div>
                    <div className="col-md 6"><div className="space">
                        <img src={user} className="image" alt="Allanagh Sewell" />
                        <div className="container"> <p className="title">Ms Allanagh Sewell</p></div></div>
                    </div>
                </div>


                <Footer/>
                </div>
        )
    }
}
export default Board
