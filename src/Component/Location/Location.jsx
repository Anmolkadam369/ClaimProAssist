import React ,{useState} from 'react';
import './Location.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Location() {
    const navigate = useNavigate();
    function submitted(){
        console.log("some");
        navigate("../Location1");
    }
    return(
        <div>
            <div className="location-elem-5">
                <div className="location-elem-4">
                    <div className="location-elem-3"> </div>
                    <div className="location-elem-2">
                        <span className="location-elem-1">
                            <p>Claim Pro Assist</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="location-elem-6">
                <div className="location-elem-7">
                    <span className="location-elem-9">
                        <p><br /></p>
                    </span>
                    <div className="location-elem-8">
                        <div className="location-elem-44">
                            <div className="location-elem-30">
                                <span className="location-elem-28">
                                    <p>Personal Info</p>
                                </span>
                                <span className="cd-paragraph-clean location-elem-29">
                                    <p><br /></p>
                                </span>
                            </div>
                            <div className="location-elem-43">
                                <div className="location-elem-42">
                                    <div className="location-elem-31">
                                        <div className="location-elem-41">
                                            <div className="location-elem-40">
                                                <span className="location-elem-38">
                                                    <p>Title*</p>
                                                </span>
                                                <select className="location-elem-39">
                                                    <option>Select any</option>
                                                </select>
                                            </div>
                                            <div className="location-elem-34">
                                                <span className="location-elem-33">
                                                    <p>First name</p>
                                                </span>
                                                <input type="text" placeholder="Your first name" className="location-elem-32" required={true} />
                                            </div>
                                            <div className="location-elem-37">
                                                <span className="location-elem-36">
                                                    <p>Last name</p>
                                                </span>
                                                <input type="text" placeholder="Your last name" className="location-elem-35" required={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="location-elem-18">
                            <div className="location-elem-12">
                                <span className="location-elem-10">
                                    <p>Vehicle info</p>
                                </span>
                                <span className="cd-paragraph-clean location-elem-11">
                                    <p>.</p>
                                </span>
                            </div>
                            <div className="location-elem-17">
                                <div className="location-elem-16">
                                    <div className="location-elem-15">
                                        <span className="location-elem-14">
                                            <p>Vehicle Make</p>
                                        </span>
                                        <input type="text" placeholder="Your organisation name" className="location-elem-13" required={true} />
                                    </div>
                                    <div className="location-elem-20">
                                        <span className="location-elem-19">
                                            <p>Vehicle Model</p>
                                        </span>
                                        <select id="vehicleModelSelect" className="location-elem-21">
                                            <option>Select any</option>
                                        </select>
                                    </div>
                                    <div className="location-elem-24">
                                        <span className="location-elem-23">
                                            <p>Engine No.</p>
                                        </span>
                                        <input type="text" placeholder="Your Profession" className="location-elem-22" required={true} />
                                    </div>
                                    <div className="location-elem-27">
                                        <span className="location-elem-26">
                                            <p>Chasis No.</p>
                                        </span>
                                        <input type="text" placeholder="Ex: beginner " className="location-elem-25" required={true} />
                                    </div>
                                    <div className="location-elem-46">
                                        <button className="location-elem-45" type="submit" onClick={submitted}>
                                            <p>Submit Now</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container location-elem-66">
                <span className="location-elem-47">
                    <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1705838029/static/logo_page-0001jpg_1705838020_75147.jpg" />
                </span>
                <div className="location-elem-65">
                    <div className="location-elem-54">
                        <div className="location-elem-53">
                            <span className="cd-paragraph-clean location-elem-48">
                                <p>Company</p>
                            </span>
                            <span className="cd-paragraph-clean location-elem-49">
                                <p>Legal</p>
                            </span>
                            <span className="cd-paragraph-clean location-elem-50">
                                <p>Terms &amp; Condition</p>
                            </span>
                            <span className="cd-paragraph-clean location-elem-51">
                                <p>Privacy policy</p>
                            </span>
                            <span className="cd-paragraph-clean location-elem-52">
                                <p>Cookies Policy</p>
                            </span>
                        </div>
                    </div>
                    <div className="location-elem-64">
                        <div className="location-elem-58">
                            <span className="cd-paragraph-clean location-elem-55">
                                <p>Reach us</p>
                            </span>
                            <span className="cd-paragraph-clean location-elem-56">
                                <a href="tel:0000000000" className="link" target="_self">
                                    <p>+91-</p>
                                </a>
                            </span>
                            <span className="cd-paragraph-clean location-elem-57">
                                <a href="mailto:example@email.com" className="link" target="_self">
                                    <p>info@claimpro.in</p>
                                </a>
                            </span>
                        </div>
                        <div className="location-elem-63">
                            <span className="location-elem-59">
                                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/twitter-brands-1svg_1658039694_28808.svg" />
                            </span>
                            <span className="location-elem-60">
                                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/facebook-f-brands-1svg_1658039694_37683.svg" />
                            </span>
                            <span className="location-elem-61">
                                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/instagram-brands-1svg_1658039694_41229.svg" />
                            </span>
                            <span className="location-elem-62">
                                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/youtube-brands-1svg_1658039694_73913.svg" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;