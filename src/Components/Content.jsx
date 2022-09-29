import React from 'react'
import picture from '../Assets/Images/banner.svg'
import { SocialIcon } from 'react-social-icons';
import '../Assets/CSS/Navigationdrawer.scss'
import '../Assets/CSS/iconsarea.css'
import { FaAngleRight } from "react-icons/fa";
 

export default function Content() {
  return (
    <div className='contentstyle'>
      <div class="vl"></div>
      <div className='row'>

        <div className='col-md-6 col-sm-12' style={{ paddingLeft: "10%", paddingTop: "6%", paddingBottom: "15%", paddingRight: "10%", marginTop: "10px" }}>
          <h4 className='text' style={{width:"110%"}}>ESSAY WRITING (ANY TYPE)
            AT YOUR CONVINIENCE
          </h4>
          <p className='contentdescription'>All types of writing service for students who want results twice as quickly. Use our essay writing service. Whatever type of academic paper you require to boost your grade and fulfil your deadlines, we can help. Hiring us is all you need to achieve that A in your assignment.</p>
          <button className='btnGetInTouch' >Get in Touch<FaAngleRight style={{ fontSize: "18px" }} /> </button>
        </div>

        <div className='col-6'>


          <img src={picture} alt="Image description" className='banner' />

          <div className='rotate'>
            <h3 style={{ fontSize: "12px" }}>Essaysbyrael@gmail.com</h3>
          </div>

          <div class="vl3"></div>

        </div>

      </div>
      <div className='socialicons' >
        <SocialIcon url="https://twitter.com/jaketrent" style={{ width: "25px", height: "25px", margin: "0 15px 5px 0" }} /><br />
        <SocialIcon url="https://facebook.com/jaketrent" style={{ width: "25px", height: "25px", margin: "0 15px 5px 0" }} /><br />
        <SocialIcon url="https://tiktok.com/jaketrent" style={{ width: "25px", height: "25px", margin: "0 15px 5px 0" }} /><br />
        <SocialIcon url="https://instagram.com/jaketrent" style={{ width: "25px", height: "25px", margin: "0 15px 5px 0" }} /><br />
        <SocialIcon url="https://whatsapp.com/jaketrent" style={{ width: "25px", height: "25px", margin: "0 15px 5px 0" }} /><br />
        <SocialIcon url="https://google.com/jaketrent" style={{ width: "25px", height: "25px", margin: "0 15px 5px 0" }} />
        <div class="vl2"></div>
      </div>



    </div>
  )
}
