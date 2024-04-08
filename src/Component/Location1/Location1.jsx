import React, { useState } from 'react';
import './Location1.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Location1() {
    const navigate = useNavigate();
    function submitted(){
        navigate("../Location2");
    }
    return (
        <div>
            <div className="location1-elem-5">
                <div className="location1-elem-4">
                    <div className="location1-elem-3"> </div>
                    <div className="location1-elem-2">
                        <span className="location1-elem-1">
                            <p>Claim Pro Assist </p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="location1-elem-9">
                <div className="location1-elem-8">
                    <div className="location1-elem-10">
                        <span className="location1-elem-6">
                            <p>Send Location</p>
                        </span>
                        <button className="location1-elem-7">
                            <p>Send</p>
                        </button>
                    </div>
                    <span className="location1-elem-11">
                        <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1706004605/static/image7vos_1706004605_73862.jpg" />
                    </span>
                </div>
            </div>
            <div className="location1-elem-16">
                <span className="location1-elem-12">
                    <p>Upload Images</p>
                </span>

                {/* Hidden input for reg_no */}
                <input type="hidden" id="reg_no" name="reg_no" />

                {/* Dropzone container */}
                <div>
                    <div id="dropzone-container" className="dropzone">
                        <div className="fallback">
                            <input name="image" type="file" multiple />
                        </div>
                    </div>
                </div>
            </div>
            <button className="location1-elem-71" onClick={submitted}>
                <p>Submit</p>
            </button>
            <div className="container location1-elem-70">
                <span className="location1-elem-51">
                    <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1705838029/static/logo_page-0001jpg_1705838020_75147.jpg" />
                </span>
                <div className="location1-elem-69">
                    <div className="location1-elem-58">
                        <div className="location1-elem-57">
                            <span className="cd-paragraph-clean location1-elem-52">
                                <p>Company</p>
                            </span>
                            <span className="cd-paragraph-clean location1-elem-53">
                                <p>Legal</p>
                            </span>
                            <span className="cd-paragraph-clean location1-elem-54">
                                <p>Terms &amp; Condition</p>
                            </span>
                            <span className="cd-paragraph-clean location1-elem-55">
                                <p>Privacy policy</p>
                            </span>
                            <span className="cd-paragraph-clean location1-elem-56">
                                <p>Cookies Policy</p>
                            </span>
                        </div>
                    </div>
                    <div className="location1-elem-68">
                        <div className="location1-elem-62">
                            <span className="cd-paragraph-clean location1-elem-59">
                                <p>Reach us</p>
                            </span>
                            <span className="cd-paragraph-clean location1-elem-60">
                                <a href="tel:0000000000" className="link" target="_self">
                                    <p>+91-</p>
                                </a>
                            </span>
                            <span className="cd-paragraph-clean location1-elem-61">
                                <a href="mailto:example@email.com" className="link" target="_self">
                                    <p>info@claimpro.in</p>
                                </a>
                            </span>
                        </div>
                        <div className="location1-elem-67">
                            <span className="location1-elem-63">
                                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/twitter-brands-1svg_1658039694_28808.svg" />
                            </span>
                            <span className="location1-elem-64">
                                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/facebook-f-brands-1svg_1658039694_37683.svg" />
                            </span>
                            <span class="location1-elem-65">
                                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/instagram-brands-1svg_1658039694_41229.svg" />
                            </span><span class="location1-elem-66">
                                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/youtube-brands-1svg_1658039694_73913.svg" /> </span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location1;