import React, {useState,useEffect} from "react";

function ToyForm({setToys, toys}) {
const [formData, setFormData] = useState({
  name:"",
  image:"",
  likes:0
})
function handleChange(e){
setFormData({...formData, [e.target.name]:e.target.value})
}

function handleSubmit(e){
  e.preventDefault()
  const configObj = {
    "method":"POST",
    "headers":{
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    "body":JSON.stringify(formData)
  }

  fetch("http://localhost:3001/toys",configObj)
  .then(response => response.json())
  .then(item => setToys([...toys,item]))
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => handleSubmit(e)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e)=>handleChange(e)}
          value = {formData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e)=>handleChange(e)}
          value = {formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
