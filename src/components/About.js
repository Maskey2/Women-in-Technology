import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Resume from "../images/Resume Workshop.jpg";
import QnA from "../images/QnASession.jpg";
import Poster from "../images/Poster Design Competition.jpg";
import Tshirt from "../images/tshirt.jpg";
import PublicSpeaking from "../images/p1.jpg";
import DXC from "../images/dxc0.jpg";
import meeting from "../images/meeting.gif";


import "./About.css"

export class About extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                {/*<div className="container space">*/}
                    {/*<div className="row">*/}
                        {/*<div className="col-md-12">*/}
                            {/*<h1 align="center">Meetings and Events</h1>*/}
                            {/*<p align="center" className="grey">Women in Technology has General Meetings mostly once or twice a month in STEM buildings. Here are the recent meetings and events organized by WIT.</p>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    {/*<div className="row resume">*/}
                        {/*<div className="col-md-4">*/}
                            {/*<img src={DXC} className="image" alt="logo" align="right"/>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-8">*/}
                            {/*<h3>DXC Company Visit </h3>*/}
                            {/*<p className="guest">*/}
                                {/*<b>A Company Tour with Computer Science Faculty and WIT</b></p>*/}
                            {/*<ul>*/}
                                {/*<li>Data Science Presentations </li>*/}
                                {/*<li>Relationship building with WIT group of DXC </li>*/}
                                {/*<li>Learnt about real work environment of technology field</li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<hr/>*/}

                    {/*<div className="row resume">*/}
                        {/*<div className="col-md-4">*/}
                            {/*<img src={PublicSpeaking} className="image" alt="logo" align="right"/>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-8">*/}
                            {/*<h3>Communication and Public Speaking Workshop </h3>*/}
                            {/*<p className="guest">*/}
                                {/*<b>Guest Speaker: Dr Clare Procopio</b></p>*/}
                            {/*<ul>*/}
                                {/*<li>Learnt about Communication and Public Speaking skills </li>*/}
                                {/*<li>Exercise and Practice on job interview conversations </li>*/}
                                {/*<li>Pizza and drinks were provided.</li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<hr/>*/}

                    {/*<div className="row resume">*/}
                            {/*<div className="col-md-4">*/}
                                {/*<img src={Resume} className="image" alt="logo" align="right"/>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-8">*/}
                                {/*<h3>Resume Workshop </h3>*/}
                                {/*<p className="guest">*/}
                                    {/*<b>Guest Speaker: Ms Elle Overholt</b></p>*/}
                                {/*<ul>*/}
                                    {/*<li>Build connections and enhance professional development </li>*/}
                                    {/*<li>Move on step closer to their dream job </li>*/}
                                {/*<li>Pizza and drinks were provided.</li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                    {/*</div>*/}
{/*<hr/>*/}
                    {/*<div className="row resume">*/}
                        {/*<div className="col-md-4">*/}
                            {/*<img src={QnA} className="image" alt="QnA" align="right" />*/}
                        {/*</div>*/}
                        {/*<div className="col-md-8">*/}
                            {/*<h3>Q&A Session with Dr Theresa Beaubouef</h3>*/}
                            {/*<p className="guest">*/}
                                {/*<b>Guest Speaker: Dr Theresa Beaubouef and Mr Cary Riche</b></p>*/}
                            {/*<ul>*/}
                                {/*<li>Q&A Session with Dr Theresa Beaubouef </li>*/}
                                {/*<li>Speech by Mr Cary Riche, Instrcutor at NTCC </li>*/}
                                {/*<li >Sandwiches, fruit trays and drinks were provided..</li>*/}
                                {/*<li>Winner Announcement of Poster Design Competition</li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<hr/>*/}
                    {/*<div className="row resume">*/}
                        {/*<div className="col-md-4">*/}
                            {/*<img src={Poster} className="image" alt="QnA" align="right" />*/}
                        {/*</div>*/}
                        {/*<div className="col-md-8">*/}
                            {/*<h3>Poster Design Competition</h3>*/}
                            {/*<ul>*/}
                                {/*Prizes:*/}
                                    {/*<li>First place:  $100</li>*/}
                                    {/*<li>Second place: $75</li>*/}
                                    {/*<li>Third place: $50</li>*/}
                                    {/*<li>	All STEM majors (Science, Technology, Engineering & Math) at Southeastern are eligible to participate.</li>*/}
                                    {/*<li>	The poster design will be printed, and the winner will be announced in our general meeting.</li>*/}
                                    {/*<li>	Winners must present 2-5 minutes about their ideas, motivation, their design procedure and steps followed till the final draft.</li>*/}

                            {/*</ul>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<hr/>*/}
                    {/*<div className="row resume">*/}
                        {/*<div className="col-md-4">*/}
                            {/*<img src={Tshirt} className="image" alt="QnA" align="right" />*/}
                        {/*</div>*/}
                        {/*<div className="col-md-8">*/}
                            {/*<h3>Fundraising by T-Shirt Design</h3>*/}
                            {/*<p className="guest">*/}
                                {/*<b>WIT Design/ Custom Design : $8</b></p>*/}
                            {/*<ul>*/}
                                {/*<li>8*11 prints </li>*/}
                                {/*<li>100% Cotton whiteT-shirts </li>*/}

                            {/*</ul>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}


                <div className="container1">

                    <header className="header">
                        <h4 className="logo1">Meetings and Events     </h4>
                    </header>

                    
                    <section className="intro">
                        <div className="column" align="center">
                            <img src={meeting} alt="" className="meeting"/></div>
                        <div className="column column2" align="center">
                            <h3>Women in Technology has General Meetings mostly once or twice a month in STEM buildings.
                                Here are the recent meetings and events organized by WIT.</h3>
                        </div>
                    </section>

                    <div className="gallery">
                        <div className="thumbnail">
                            <img src={DXC} alt="" className="cards"/>
                            <h4>DXC Company Visit</h4>
                            <p className="tag">A Company Tour with Computer Science Faculty and WIT Team</p>
                            <ol className="left">
                                <li>Data Science Presentations</li>
                                <li> Relationship building with WIT group of DXC</li>
                                <li>Learnt about real world work environment</li>
                                <li>DXC building Tour</li>
                            </ol>
                        </div>
                        <div className="thumbnail"><img src={PublicSpeaking} alt=""           className="cards"/>
                            <h4>Communication and Public Speaking Workshop</h4>
                            <p className="tag">Guest Speaker: Dr Clare Procopio</p>
                            <ol className="left">
                                <li>Learnt about Communication and Public Speaking skills

                                </li>
                                <li>Exercise and Practice on excelling job interviews</li>
                                <li>Pizza and drinks were provided.</li>
                            </ol>
                        </div>
                        <div className="thumbnail"><img src={Resume} alt=""       className= "cards"/>
                            <h4>Resume Workshop</h4>
                            <p className="tag">Guest Speaker: Ms Elle Overholt</p>
                            <ol className="left">
                                <li>Updated Resumes, built connections and enhanced professional network development
                                </li>
                                <li>Career Development tips and tricks</li>
                                <li>Learnt how to move one step closer to the dream job</li>
                                <li>Pizza and drinks were provided.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="gallery1">

                        <div className="thumbnail"><a href="#"><img src={QnA} alt=""          className="cards"/></a>
                            <h4>Q&A Session with Dr Theresa Beaubouef</h4>
                            <p className="tag">Guest Speaker: Dr Theresa Beaubouef and Mr Cary Riche</p>
                            <ol className="left">
                                <li>Q&A Session with Dr Theresa Beaubouef. Most discussions were related to women in
                                    STEM.
                                </li>
                                <li>Speech by Mr Cary Riche, Instructor of NorthShore Technical Community College</li>
                                <li>Sandwiches, fruit trays and drinks were provided.</li>
                                <li>Winner Announcement of Poster Design Competition</li>

                            </ol>
                        </div>
                        <div className="thumbnail poster"><a href="#"><img src={Poster} alt=""      className="cards"/></a><br/>
                            <h4>Poster Design Competition</h4>

                            <ol className="left">
                                <li>First place: $100, Second place: $75, Third place: $50</li>
                                <li>Theme: Women in Technology</li>
                                <li>All STEM majors (Science, Technology, Engineering & Math) at Southeastern were
                                    eligible to participate.
                                </li>
                                <li>The poster design was printed, and the winner was be announced in the general
                                    meeting.
                                </li>
                                <li>Winners presented 2-5 minutes about their ideas, motivation, their design procedure
                                    and steps followed till the final draft.
                                </li>
                            </ol>
                        </div>
                        <div className="thumbnail tshirt"><img src={Tshirt} alt="" className="cards"/>
                            <h4>Fundraising by T-Shirt Design</h4>
                            <p className="tag">WIT Design/ Custom Design : $8</p>
                            <ol className="left">
                                <li>WIT team came up with their own design with WIT theme and decided to make the shirts.</li>
                                <li>The prints for the shirts are 8*11 size.</li>
                                <li>The shirts are 100% Cotton white shirts.</li>
                                <li>Please contact WIT Team if you'd like to support us by purchasing the shirt!</li>
                                <li>Contact slu_wit@southeastern.edu for more info</li>
                            </ol>
                        </div>

                    </div></div>

               <Footer/>
            </div>
        )
    }
}
export default About
