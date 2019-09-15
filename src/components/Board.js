import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nishma from "../images/Nishma.jpg";
import "./Board.css";
import p from "../images/p.jpg";
import user from "../images/user.png";
import Ashlynn from "../images/Ashlynn.jpeg";
import thanku from "../images/thanku.jpg";
import team from "../images/team.gif";
import teamwork from "../images/teamwork.jpg";
import team2 from "../images/team2.gif";
import Pratikshya from "../images/Pratikshiya.jpg";
import Vu from "../images/Vu.jpeg";
import Lisa from "../images/DrLisa.jpg";
import Allanagh from "../images/MsAllanagh.jpg";
import Sijan from "../images/Sijan.jpg";

export class Board extends React.Component {
  render() {
    return (
      <div>
        <Header />

        {/*<div className="row" align="center">*/}
        {/*<div className="col-md-6 ">*/}
        {/*<div className="space">*/}
        {/*<img src={Nishma} className="image" alt="Nishma Maskey" />*/}
        {/*<div className="container"> <p className="title">President: Nishma Maskey</p>*/}
        {/*<p>Nishma Maskey is a senior majoring in Computer Science and minoring in Mathematics. She is also a graphic designer. She is a aspiring web developer. She is a current web developer*/}
        {/*intern at Texas Commission in Environment Quality in Austin, Texas. She likes to watch movies, play guitar and be artistic in leisure time.</p></div></div>*/}
        {/*</div>*/}
        {/*<div className="col-md 6"><div className="space">*/}
        {/*<img src={Ashlynn} className="image" alt="Ashlynn Martell" />*/}
        {/*<div className="container"> <p className="title">Vice President: Ashlynn Martell</p>*/}
        {/*<p>Ashlynn is a current sophomore working on a Computer Science degree in the Scientific concentration. She is also Treasurer of ACM-W, a member of ACM,*/}
        {/*and an intern at ITinspired in Baton Rouge. When she isn’t staring at a computer screen she enjoys spending time with her dachshund Rocky and enjoying nature.</p></div></div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="row" align="center" >*/}
        {/*<div className="col-md 6" ><div className="space">*/}
        {/*<img src={user} className="image" alt="Sijan Tiwari" />*/}
        {/*<div className="container"> <p className="title">Sijan Tiwari</p></div></div>*/}
        {/*</div>*/}
        {/*<div className="col-md 6"><div className="space">*/}
        {/*<img src={user} className="image" alt="Pratikshya Timalsina" />*/}
        {/*<div className="container"> <p className="title">Pratikshya Timalsina</p></div></div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="row" align="center" >*/}
        {/*<div className="col-md 6" ><div className="space">*/}
        {/*<img src={user} className="image" alt="Quynh Vu" />*/}
        {/*<div className="container"> <p className="title">Quynh Vu</p></div></div>*/}
        {/*</div></div>*/}
        {/*<hr/>*/}
        {/*<h3 align="center">Faculty Advisors</h3>*/}
        {/*<div className="row" align="center" >*/}
        {/*<div className="col-md 6" ><div className="space">*/}
        {/*<img src={user} className="image" alt="Dr Lisa Kuhn" />*/}
        {/*<div className="container"> <p className="title">Dr Lisa Kuhn</p></div></div>*/}
        {/*</div>*/}
        {/*<div className="col-md 6"><div className="space">*/}
        {/*<img src={user} className="image" alt="Allanagh Sewell" />*/}
        {/*<div className="container"> <p className="title">Ms Allanagh Sewell</p></div></div>*/}
        {/*</div>*/}
        {/*</div>*/}

        <div className="container1">
          <header className="header">
            <h4 className="logo1">Meet the Team </h4>
          </header>

          <div className="container" align="center">
            <img src={team} className="responsive" />
            <h3>
              Women in Technology Team has wonderful and hard- working officers!
              They are Southeastern students in STEM field.
            </h3>
          </div>

          <div className="gallery">
            <div className="thumbnail">
              <img src={Nishma} alt="" className="cards" />
              <h4>Nishma Maskey</h4>
              <p className="tag">President</p>
              <p>
                Nishma is a senior majoring in Computer Science and minoring in
                Mathematics. She is also a graphic designer. She is a aspiring
                Web/ UX developer. She is a current Web developer intern at
                Texas Commission in Environment Quality in Austin, Texas. She is
                originally from Nepal. She likes to watch movies, travel, play
                guitar and be artistic in leisure time.
              </p>
            </div>
            <div className="thumbnail">
              <a href="#">
                <img src={Ashlynn} alt="" className="cards" />
              </a>
              <h4>Ashlynn Martell</h4>
              <p className="tag">Vice President</p>
              <p>
                Ashlynn is a current sophomore working on a Computer Science
                degree in the Scientific concentration. She is also Treasurer of
                ACM-W, a member of ACM, and an intern at ITinspired in Baton
                Rouge. She is also a CS tutor in Southeastern. When she isn’t
                staring at a computer screen she enjoys spending time with her
                dachshund Rocky and enjoying nature.
              </p>
            </div>
            <div className="thumbnail">
              <img src={Vu} alt="" className="cards" />
              <h4>Quynh Vu</h4>
              <p className="tag">Public Relation Officer</p>
              <p>
                Quynh is a junior majoring in Computer Engineering with a minor
                in IT. She works part-time during school and full-time during
                the summer at a salon in Covington. When there's free time, she
                likes to hang out with friends, sing her heart out while
                cooking, watch movies and anime, play Overwatch on Xbox, and
                admire other people's pets on the internet.{" "}
              </p>
            </div>
          </div>
          <div className="gallery">
            <div className="thumbnail ">
              <img src={Sijan} alt="" className="cards" />
              <h4>Sijan Tiwari</h4>
              <p className="tag">Treasurer</p>
              <p>
                Sijan is a Senior at Southeastern Louisiana University majoring
                in Computer Science. Besides computer science, she has interest
                in Mathematics. She is currently interning as a Software
                Developer in Somnio Technology. She also worked as a computer
                science tutor at Southeastern. During leisure time, she likes to
                travel around new places, read books and watch movies and vlogs.
              </p>
            </div>
            <div className="thumbnail thumb">
              {" "}
              <img src={team2} className="team" />
            </div>
            <div className="thumbnail ">
              <img src={Pratikshya} alt="" className="cards" />
              <h4>Pratikshya Timalsina</h4>
              <p className="tag">Secretary</p>
              <p>
                Pratikshya is pursuing her Bachelor's degree Computer Science
                and minoring in Mathematics. Currently she is working as a
                Summer Intern at DXC Technology at NOLA. She is interested in
                Fullstack Web development. She loves to play piano, go for
                adventure sports such as white water rafting and paragliding and
                she enjoys road trips too.{" "}
              </p>
            </div>
          </div>
          <hr />
          <h2 align="center">
            <strong>Faculty Advisers</strong>
          </h2>
          <div className="gallery">
            <div className="thumbnail">
              <img src={Lisa} alt="" className="cards" />
              <h4>
                Mathematics Professor at Southeastern Louisiana University
              </h4>
              <p className="tag">Dr Lisa Kuhn</p>
            </div>
            <div className="thumbnail thumb">
              <img src={thanku} alt="" className="thanku" />
            </div>
            <div className="thumbnail">
              <a href="#">
                <img src={Allanagh} alt="" className="cards" />
              </a>
              <h4 style={{ fontSize: 23 }}>
                Computer Science Instructor at Southeastern Louisiana University
              </h4>
              <p className="tag">Ms Allanagh Sewell</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Board;
