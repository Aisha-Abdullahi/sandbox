import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/CSS/Navigationdrawer.scss'

export default function Navbar() {
    const isLoggedIn = false
    return (
        <div className='row' style={{ margin:"auto",width:"90%"}}>
            <div className='col-4' >
                <p  style={{marginTop:"20px", color:"#e91e63", fontSize:"20px", fontWeight:"bolder"}}>EssaysByRael</p>
            </div>
            <div className='col-8'>
            <ul class="nav" >
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Testimonials</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">How it works</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">FAQ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item" href="#">
                    <a class="nav-link">Hire us</a>
                </li>
                {/* ternary operator */}
                {isLoggedIn ?
                    <li class="nav-item" href="#">
                    <a class="nav-link">Login</a>
                </li>
                :
                <li class="nav-item" href="#">
                    <a class="nav-link">Log out</a>
                </li>
                } 
            </ul>
            </div>
            <hr class="solid"></hr>
        </div>
        
    )
}
