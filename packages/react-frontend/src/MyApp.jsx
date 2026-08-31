import  React, { useState } from "react";
import Table from "./Table";
import Form from "./Form" 


function MyApp() {

  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(index){
    const updated = characters.filter((character,i) =>{
      return i !=index;
    });
    setCharacters(updated)
  }
  function updateList(person){
    setCharacters([...characters, person])
  }
  
  
  return (
    <div className="container">
      <Table characterData = {characters} removeCharacter ={removeOneCharacter}/>
      <Form handleSubmit={updateList} />
    </div>
  );
}



export default MyApp; //can only export one default per file. so i can do import M from "./MyApp" and it 
                      //will export the default one. 