import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';

import '../Assets/CSS/Products.css'



export default function Products() {



  const [show, setShow] = useState(false); //stores state... setState converts current state from true to false and vice versa

  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  //fetch data
  const [data, setData] = useState([]); //empty state
  useEffect(() => {                     // useEffect to fetch data
    axios.get('https://tancyessaysadmin.herokuapp.com/revision/')  //axios specifies if its get/post request
      .then((res) => {
        setData(res.data) //store the response in data
      }).catch((err) => {
        console.log(err)
      })

  })

  const [clientEmail, setClientEmail] = useState("")
  const [topic, setTopic] = useState("")
  const [paperDescription, setPaperDescription] = useState("")
  const [paperAttachment, setPaperAttachment] = useState("")
  const [dueDate, setDueDate] = useState("")

  const createProducts = () => {
    console.warn(clientEmail, topic, paperDescription, paperAttachment, dueDate);
    const formData = new FormData();
    formData.append("clientEmail", clientEmail)
    formData.append("topic", topic)
    formData.append("paperDescription", paperDescription)
    formData.append("paperAttachment", paperAttachment)
    formData.append("dueDate", dueDate)

    axios.post('https://tancyessaysadmin.herokuapp.com/revision/', formData, {
      headers: {
        "content-type": "multipart/form-data",  //specifies the type of format
      },
    }).then(() => {
      window.location.reload()
      alert("Product created")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (

    <>
      <button className='btn btn-primary' onClick={handleShow}>Create product</button>
      <div className='products-content gap-3 align-items-centre'>


        {
          data.map((data) =>
          (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{data.topic}</Card.Title>
                <Card.Text>
                  {data.paperDescription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>


          )


          )

        }
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='form-control'>
              <label>
                Email
              </label>
              <input type="text" className="form-control" id='clientEmail' onChange={(e) =>setClientEmail(e.target.value)} />

            </div>
            <div className='form-control'>
              <label>
                topic
              </label>
              <input type="text" className="form-control" id='topic' onChange={(e) =>setTopic(e.target.value)} />

            </div>
            <div className='form-control'>
              <label>
                Description
              </label>
              <input type="text" className="form-control" id='paperDecription' onChange={(e) =>setPaperDescription(e.target.value)}/>


            </div>
            <div className='form-control'>
              <label>
                Attachment
              </label>
              <input type="file" className="form-control" id='paperAttachment' onChange={(e) =>setPaperAttachment(e.target.files[0])}/>


            </div>
            <div className='form-control'>
              <label>
                Due date
              </label>
              <input type="datetime-local" className="form-control" id='dueDate' onChange={(e) =>setDueDate(e.target.value)}/>


            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={createProducts}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
