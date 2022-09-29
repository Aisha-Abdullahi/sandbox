import React from 'react'
import '../Assets/CSS/Services.css'
import home1 from '../Assets/Images/house1.jpg'
import home2 from '../Assets/Images/house2.jpg'
import home3 from '../Assets/Images/house3.jpg'
import Housesdata from './Housesdata'


export default function Services() {
  return (
    <div className='houseservices' >
      <div style={{ margin: "auto", width: "80%" }}>
        <h2 className='firstheader'>POPULAR RESIDENCES.</h2>
      </div>
      <div className='houses'>
        <Housesdata imagedata={home1} price={"47,043"} name={"Aliva Priva Jardin"} description={"Jakarta Garden city street, Cagung pulo Gadung, Dakarta DKI Jakarta"} />
        <Housesdata imagedata={home2} price={"66,353"} name={"Aliva Priva Jardin"} description={"Jakarta Garden city street, Cagung pulo Gadung, Dakarta DKI Jakarta"} />
        <Housesdata imagedata={home3} price={"35.585"} name={"Aliva Priva Jardin"} description={"Jakarta Garden city street, Cagung pulo Gadung, Dakarta DKI Jakarta"} />
      </div>
    </div>


  )
}
