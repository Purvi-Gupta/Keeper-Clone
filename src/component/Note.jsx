import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  const {title,content} = props.noteData
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={()=>{
        props.onDelete(props.id)
      }}><DeleteIcon /></button>
    </div>
  );
}

export default Note;