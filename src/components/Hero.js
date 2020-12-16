import React,{useState} from "react";
import {Card, Col } from "react-bootstrap";

const Hero = ({ nombre, imagen, poderes }) => {
   
    
  return (
     
    
      <Card style={{ width: "24rem", borderColor:"red" }}>
      <Card.Img variant="top" src={imagen} />
        <Card.Body >
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Poder de combate: {poderes.combat}</Card.Text>
          <Card.Text>Resistencia: {poderes.durability}</Card.Text>
          <Card.Text>Inteligencia: {poderes.intelligence}</Card.Text>
          <Card.Text>Poder: {poderes.power}</Card.Text>
          <Card.Text>Velocidad: {poderes.speed}</Card.Text>
          <Card.Text>Fuerza: {poderes.strength}</Card.Text>
        </Card.Body>
      </Card>
    
   
  );
};

export default Hero;