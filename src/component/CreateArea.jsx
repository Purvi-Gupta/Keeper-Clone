import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";


function CreateArea(props) {

  const [note,setNote] = useState({
    title : "",
    content : ""
  });

  const [isExpand,setExpand] = useState(false);

  function handleChange(event){
    const value = event.target.value;
    const name = event.target.name;

    setNote(previous => {
      return {
        ...previous,
        [name] : value
      }
    })
  }

  function expand(){
      setExpand(true);
  }


  return (
    <div>
      <form className="create-note">
        {
          isExpand && <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        }
        <textarea 
        name="content" 
        placeholder="Take a note..." 
        rows={isExpand ? "3" : "1"} 
        value={note.content} 
        onChange={handleChange}
        onClick={expand} />
        
        <Zoom in={isExpand}>
        <Fab onClick={(event)=>{
          props.handleData(note);
          setNote({title:"",content:""});
          event.preventDefault();
          setExpand(false);
        }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
