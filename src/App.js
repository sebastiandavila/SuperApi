

import { API_KEY, BASE_URL } from "./utils/api";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Container } from "react-bootstrap";

function App() {
  const [heroname, setHeroname] = useState("");
  const [hero, setHero] = useState([]);
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [poderes, setPoderes] = useState({});
  
  useEffect(() => {
    const searchSuperHero = async () => {
      console.log("Entro al useeffect ",heroname);
      let nombreHero=heroname;
      const url = `${BASE_URL}${API_KEY}/search/${nombreHero}`;
      const response = await fetch(url);
     const hero = await response.json();
     if(hero.response==="error")
     {
       console.log("error")
       setNombre("No encontrado")
       setImagen("https://www.pngkey.com/png/detail/227-2279525_report-abuse-oops-comic.png")
       setPoderes({
        combat: "",
        durability: "",
        intelligence: "",
        power: "",
        speed: "",
        strength: ""})
     }
     else{
       setNombre(hero.results[0].name)
       setImagen(hero.results[0].image.url)
       setPoderes({
       combat: hero.results[0].powerstats.combat,
       durability: hero.results[0].powerstats.durability,
       intelligence: hero.results[0].powerstats.intelligence,
       power: hero.results[0].powerstats.power,
       speed: hero.results[0].powerstats.speed,
       strength: hero.results[0].powerstats.strength})
       
     }
     setHero(hero);
      console.log(hero);
      
      //setArticles(news.articles);
    };
    searchSuperHero();
  }, [heroname]);

 

   const cambiar = (nombre) => {
   
    setHeroname(nombre);
    
  };

  return (
    <>
    <Container>
    <Header cambiar={cambiar}/>
    <br/>
    <center>
     <Hero nombre={nombre} imagen={imagen} poderes={poderes}/>
     </center>

    </Container>
    </>
  );
}

export default App;
