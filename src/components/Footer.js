import React from "react"
import fb from "../fb.png";
import ig from "../ig.png";
import selu from "../slu.png";
import logo from "../logo.png";

function Footer(){
    return(
        <div>
            <div className='footer' align="center">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <img src={selu} className="sm3 responsive" alt="logo" />
                        </div>
                        <p><b>Follow us in Social Media to stay connected</b></p>

                        <a href="https://www.facebook.com/SeluWit/">
                            <img src={fb} className="sm1 responsive" alt="logo" />
                        </a>

                        <a href="https://www.instagram.com/wit.selu/">
                            <img src={ig} className="sm2 responsive" alt="logo" />
                        </a>

                        <p className="Nishma">Nishma Maskey - 2019</p>
                    </div>
        </div>
            </div>
        </div>
    )
}
export default Footer



