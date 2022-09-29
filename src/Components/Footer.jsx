import React from 'react'
import '../Assets/CSS/Footer.css'
import { SocialIcon } from 'react-social-icons';
import { FaCopyright } from "react-icons/fa";


export default function Footer() {
    return (
        <div className='footerstyles'>
            <div className='row' style={{ width: "80%", margin: "auto" }}>
                <div className='col-md-3'>
                    <h5 style={{ marginTop: "20px", color: "white" }}>Get started</h5>
                    <div class="vl4"></div>
                    <div className='getstartedcontent'>
                        <p>Collaboration Platform</p>
                        <p>Q&A Platform</p>
                        <p>Document Repository</p>
                        <p>News</p>
                        <p>Community</p>
                    </div>

                </div>
                <div className='col-md-3'>
                    <h5 style={{ paddingLeft: "20%", marginTop: "20px", color: "white" }}>Solutions</h5>
                    <div class="vl5"></div>
                    <div className='solutionscontent'>
                        <p>Collaboration Platform</p>
                        <p>Q&A Platform</p>
                        <p>Document Repository</p>
                        <p>News</p>
                        <p>Community</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <h5 style={{ paddingLeft: "30%", marginTop: "20px", color: "white" }}>Services</h5>
                    <div class="vl6"></div>
                    <div className='servicescontent'>
                        <p>Collaboration Platform</p>
                        <p>Q&A Platform</p>
                        <p>Document Repository</p>
                        <p>News</p>
                        <p>Community</p>

                    </div>
                </div>
                <div className='col-md-3'>
    <h5  style={{paddingLeft:"20%",marginTop:"20px", color:"white"}}>Reach Out To Us</h5>
    <div class="vl5"></div>
    <div className='socialcontent'>
    <SocialIcon url="https://google.com/jaketrent" style={{ width: "25px", height: "25px", margin: "0 15px 5px 0" }} />
    <SocialIcon url="https://linkedin.com/jaketrent" style={{ width: "25px", height: "25px", margin: "0 15px 5px 0" }}/>
    <SocialIcon url="https://twitter.com/jaketrent" style={{ width: "25px", height: "25px", margin: "0 15px 5px 0" }}/>
    <SocialIcon url="https://instagram.com/jaketrent" style={{ width: "25px", height: "25px", margin: "0 15px 5px 0" }}/>
    </div>
    
</div>
            </div>
            <br/><hr class="solid2"></hr><br/>

            <p style={{color:"beige", marginLeft:"30%", fontWeight:"bold",fontFamily:"sans-serif"}}>COLLABORATION | Q&A | NEWS | COMMUNITY |</p>
            <p style={{color:"beige", marginLeft:"30%", fontWeight:"bold",fontFamily:"sans-serif", fontSize:"13px"}}><FaCopyright/> 2022 Copyright Research Buddy. All Rights Reserved.</p>
        </div>
    )
}
