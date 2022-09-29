import React from 'react'
import Content from '../Components/Content'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Services from '../Components/Services'


export default function Homepage() {
  return (
    <div style={{height:"100vh", backgroundColor:"aliceblue"}}>
    <div>
    <Navbar/>
    <Content/>
    </div>
    <Products/>
    <Services/>
    <Footer/>
    </div>
  )
}
