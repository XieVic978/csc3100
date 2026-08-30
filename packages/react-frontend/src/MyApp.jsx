import  {useState} from "react";
import Table from "./Table";
import F from "./Form" 


function MyApp() {

  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(index){
    const updated = characters.filter((character,i) =>{
      return i !=index;
    });
    setCharacters(updated)
  }
  
  return (
    <div className="container">
      <Table characterData = {characters} removeCharacter ={removeOneCharacter}/>
      <F />
    </div>
  );
}



export default MyApp; //can only export one default per file. so i can do import M from "./MyApp" and it 
                      //will export the default one. 