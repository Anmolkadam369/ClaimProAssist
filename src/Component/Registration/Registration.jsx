import React ,{useState} from 'react';
import './Registration.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Registration() {
    const navigate = useNavigate()
    const [regNo, setRegNo]=useState(null);
    function getVehicalData(){
        try {
            navigate('../Location')
            // const getData = axios.get(`http://3.133.132.156:3000/api/vehicle/${regNo}`)
        } catch (error) {
            console.log("error", error.message);
        }
    }

    function handleChange(event){
        console.log("some", regNo)
        setRegNo(event.target.value)
    }
    return (
        <div>
            <div className="Registrationdetails-elem-5">
                <div className="Registrationdetails-elem-4">
                    <div className="Registrationdetails-elem-3"></div>
                    <div className="Registrationdetails-elem-2">
                        <span className="Registrationdetails-elem-1">
                            <p>Claim Pro Assist</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="Registrationdetails-elem-16">
                <div className="Registrationdetails-elem-15">
                    <div className="Registrationdetails-elem-14">
                        <span className="cd-paragraph-clean Registrationdetails-elem-7">
                            <p><em>Vehicle Details</em></p>
                        </span>
                        <div className="Registrationdetails-elem-13">
                            <div className="Registrationdetails-elem-11">
                                <div className="Registrationdetails-elem-10">
                                    <span className="cd-paragraph-clean Registrationdetails-elem-8">
                                        <p>Reg No.</p>
                                    </span>
                                    <input type="text" 
                                    placeholder="" 
                                    className="Registrationdetails-elem-9"
                                    value={regNo}   
                                    onChange={handleChange} 
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="cd-paragraph-clean Registrationdetails-elem-12">
                        <p><br /></p>
                    </span>
                </div>
                <button className="Registrationdetails-elem-6"
                 id="submitBtn" 
                 type="submit" 
                 value={regNo} 
                 onClick={getVehicalData}>
                    <p>Submit</p>
                </button>
            </div>
            <div className="Registrationdetails-elem-42">
                <div className="container Registrationdetails-elem-36">
                    <span className="Registrationdetails-elem-17">
                        <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1705838029/static/logo_page-0001jpg_1705838020_75147.jpg" alt="Logo" />
                    </span>
                    <div className="Registrationdetails-elem-35">
                        <div className="Registrationdetails-elem-24">
                            <div className="Registrationdetails-elem-23">
                                <span className="cd-paragraph-clean Registrationdetails-elem-18">
                                    <p>Company</p>
                                </span>
                                <span className="cd-paragraph-clean Registrationdetails-elem-19">
                                    <p>Legal</p>
                                </span>
                                <span className="cd-paragraph-clean Registrationdetails-elem-20">
                                    <p>Terms & Condition</p>
                                </span>
                                <span className="cd-paragraph-clean Registrationdetails-elem-21">
                                    <p>Privacy policy</p>
                                </span>
                                <span className="cd-paragraph-clean Registrationdetails-elem-22">
                                    <p>Cookies Policy</p>
                                </span>
                            </div>
                        </div>
                        <div className="Registrationdetails-elem-34">
                            <div className="Registrationdetails-elem-28">
                                <span className="cd-paragraph-clean Registrationdetails-elem-25">
                                    <p>Reach us</p>
                                </span>
                                <span className="cd-paragraph-clean Registrationdetails-elem-26">
                                    <a href="tel:0000000000" className="link" target="_self">
                                        <p>+91-</p>
                                    </a>
                                </span>
                                <span className="cd-paragraph-clean Registrationdetails-elem-27">
                                    <a href="mailto:example@email.com" className="link" target="_self">
                                        <p>info@claimpro.in</p>
                                    </a>
                                </span>
                            </div>
                            <div className="Registrationdetails-elem-33">
                                <span className="Registrationdetails-elem-29">
                                    <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/twitter-brands-1svg_1658039694_28808.svg" alt="Twitter" />
                                </span>
                                <span className="Registrationdetails-elem-30">
                                    <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/facebook-f-brands-1svg_1658039694_37683.svg" alt="Facebook" />
                                </span>
                                <span className="Registrationdetails-elem-31">
                                    <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/instagram-brands-1svg_1658039694_41229.svg" alt="Instagram" />
                                </span>
                                <span className="Registrationdetails-elem-32">
                                    <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658039695/static/youtube-brands-1svg_1658039694_73913.svg" alt="YouTube" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Registrationdetails-elem-37"></div>
                <div className="container Registrationdetails-elem-41">
                    <span className="cd-paragraph-clean Registrationdetails-elem-38">
                        <p>Built in</p>
                    </span>
                    <span className="cd-paragraph-clean Registrationdetails-elem-39">
                        <a href="https://www.codedesign.app/" className="link" target="_self">
                            <p>CodeDesign.app</p>
                        </a>
                    </span>
                    <span className="cd-paragraph-clean Registrationdetails-elem-40">
                        <a href="https://www.codedesign.app/" className="link" target="_self">
                            <p>, All Rights Reserved © 2022.</p>
                        </a>
                    </span>
                </div>
            </div>

        </div>
    )
}
export default Registration;