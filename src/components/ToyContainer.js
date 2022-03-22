import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {

  return (
    <div id="toy-collection">{toys.map(toy => {
      return (<ToyCard key = {toy.id} id = {toy.id} name = {toy.name} image = {toy.image} numLikes = {toy.likes} setToys ={setToys} toys ={toys}/>)
    })}</div>
  );
}

export default ToyContainer;
