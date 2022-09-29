import React from 'react'
import { FaDollarSign } from "react-icons/fa";


export default function Housesdata(props) {
  return (
    <div>
      <img  className='houses' src={props.imagedata} alt="first house image" />
      <p style={{ paddingTop: "20px", marginBottom: "-3px", paddingLeft: "5%" }}> <FaDollarSign style={{ color: "e9d51e", marginTop: "-2%", fontSize: "13px", paddidngRight: "20px" }} /> {props.price}</p>
      <p style={{ fontWeight: "bold", marginBottom: "5px", paddingLeft: "5%" }}>{props.name}</p>
      <p style={{ fontSize: "10px", paddingLeft: "5%" }}>{props.description}</p>
    </div>
  )
}
