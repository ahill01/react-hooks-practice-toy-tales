import React, {useState, useEffect} from "react";

function ToyCard({id, name, image, numLikes, setToys,toys}) {
const [toyLikes, setToyLikes] = useState(numLikes)
  function sendToGoodwill(e){
    const configObj = {
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
      }, 
    }
    fetch(`http://localhost:3001/toys/${id}`,configObj)
    .then(result => result.json())
    .then(() => {deleteItem(id)})
    }

    function deleteItem(deletedId){
      const newToys = toys.filter(toy => toy.id !==deletedId); 
      setToys(newToys)
    }

   function addLikes(e){
    setToyLikes(toyLikes => toyLikes+1)
      const configObj = {
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
          },
          body:JSON.stringify({likes:numLikes})
        }
        console.log(configObj)
        fetch(`http://localhost:3001/toys/${id}`,configObj)
    }
  

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button className="like-btn" onClick={addLikes}>Like {toyLikes}</button>
      <button className="del-btn" onClick={(e)=>sendToGoodwill(e)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
