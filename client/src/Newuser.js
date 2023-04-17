import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";

function Newuser() {
  const [customerName, setCustomerName] = useState("")
  const [customerHobby, setCustomerHobby] = useState("")
  const [customerImage, setCustomerImage] = useState("")
  

  const addCustomer = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("name", customerName)
    formData.append("hobby", customerHobby)
    formData.append("customer_image", customerImage, "customer_image")

    console.log(formData)

    fetch("http://127.0.0.1:4000/customers", {
            method: "POST",
            body:formData 
        })
        .then((res)=>{
            if(res.ok){
                console.log("Form successfully submitted") 
                // Tell app that a new item has been added so it needs to load it

            }
            else{
                throw new Error("Bad Network Response")
            }
        })
        .catch((err)=>{
            console.log(err)
        })

  }
  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          {" "}
          <Form onSubmit={addCustomer}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setCustomerName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicHobby">
              <Form.Label>Hobby</Form.Label>
              <Form.Control type="text" placeholder="Hobby" onChange={(e)=>setCustomerHobby(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPic">
              <Form.Label>Enter profile Picture</Form.Label>
              <Form.Control type="file" onChange={(e)=>setCustomerImage(e.target.files[0])}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}
export default Newuser;
