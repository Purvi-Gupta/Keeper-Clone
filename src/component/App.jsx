import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea"


function App() {
  const [noteData,setNoteData] = useState([]);

  function handleData(data){
    const {title,content} = data;
    setNoteData((previous)=>{
      return [
        ...previous,
       data
      ]
    });
  }

  function deletenote(id){
    setNoteData((previous)=>{
      return previous.filter((note,index)=>{
        return index!=id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea handleData={handleData}/>
      {noteData.map((note,index)=><Note key={index} noteData={note} id={index} onDelete={deletenote } />)}
      
      <Footer />
    </div>
  );
}

export default App;
