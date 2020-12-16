import React, { useState } from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header ({cambiar}) {

  const [input, SetInput] = useState({
    Nombre: "",
  });


  const handleInputChange = (e) => {
    SetInput({Nombre: e.target.value });
    
  };

  const handleSubmit = (e) => {
    cambiar(input.Nombre);
        
  };

  return (
    <>
    <br></br>
      <Navbar bg="dark" variant="dark">
      <img
          alt=""
          src="https://i.pinimg.com/originals/6a/70/a0/6a70a02b03fa9f80ef4ba70952b99c48.png"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{"   "}
        <Navbar.Brand href="#home">Super Api</Navbar.Brand>
        <Nav className="mr-auto">
         
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" name="Nombre" value={input.Nombre} onChange={handleInputChange} className="mr-sm-2" />
          <Button variant="outline-info" onClick={handleSubmit}>Search</Button>
        </Form>
      </Navbar>
      

      
    </>
  );
}


