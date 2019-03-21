import React from "react"
import bg1 from "../bg1.jpg";

import {FaEnvelope, FaLocationArrow} from "react-icons/fa/index";

function MainContent(){
    return(
        <div>
            <div align="center">
                <img src={bg1} className="App-bg thumbnail" alt="bg" />

            </div>

            <div className="container">
                  <div className="row">
                      <div className="col-md-8 info1">
                          <li>Women in Technology is founded by Kristen Reeves and Sara Moore in 2012</li>
                          <li>A chapter of Louisiana Women in Technology, a group of professionals dedicated to networking women in STEM field (Science, Technology, Engineering & Math)</li>
                          <li>It is a community of women promoting STEM to girls and college freshmen around the Baton Rouge community which was soon extended at Southeastern Louisiana University by Kristen Reeves and Vivian Boykin</li>
                          <li>Some past events by Women in Technology were field trips to IBM (International Business Machine) and LIGO (Laser Interferometer Gravitational Wave Observatory), fundraisers like bake sale, ice cream with liquid Nitrogen, etc.
                          </li>

                     </div>
                      <div className="col-md-4 info2">
                          <div className='text'><FaLocationArrow /> <div className='text'>
                              <h3>Location</h3></div></div>
                          <p>Southeastern Louisiana University, 500 W University Ave, Hammond, LA 70402</p>

                          <div className='text'>
                              <FaEnvelope /> <div className='text'>
                              <h3>Email</h3></div></div>
                          <p>  slu_wit@southeastern.edu</p>
                      </div>
                 </div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6 quote">
                        <hr/>
                        <h2 align="center">
                            “There is no tool for development more effective than the empowerment of women. ”

                        </h2>
                        <h5 align="center">
                            — KOFI ANNAN
                        </h5>
                        <hr/>
                    </div>
                    <div className="col-md-3">
                    </div>                </div>
            </div>
        </div>

            )
}
export default MainContent



