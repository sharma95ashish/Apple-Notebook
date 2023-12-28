import { useState } from "react";
import noteContext from "./noteContext";

const Notestate = (props) => {

  // const notesInitials = [
  //   {
  //     _id: "64b4eb7f659cc61ebd95b5e3",
  //     user: "649d5aed3020e0aab2b0362d",
  //     title: "Note APi 1",
  //     description:
  //       "This is my first Add note APi, and I want to update the description",
  //     tag: "Personal",
  //     date: "2023-07-17T07:19:27.263Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "64b4eb7f659cc61ebd95b5e4",
  //     user: "649d5aed3020e0aab2b0362d",
  //     title: "Note APi 2",
  //     description:
  //       "This is my second Add note APi, and I want to update the description",
  //     tag: "Personal",
  //     date: "2023-07-17T07:19:27.263Z",
  //     __v: 0,
  //   },
  // ];

  const [notes, setNotes] = useState([]);

   //Fetch all notes
   const getNotes = async() => {
    // TODO:API CALL
   
    const response = await fetch(`${process.env.REACT_APP_PORT_NO}api/notes/fetchallnotes`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setNotes(json)
    console.log(json,"json");
    // let note = {
    //   _id: "64b4eb7f659cc61ebd95b5e5",
    //   user: "649d5aed3020e0aab2b0362d",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2023-07-17T07:19:27.263Z",
    //   __v: 0,
    // };
    // console.log(note);
    // setNotes(notes.concat(note));
  };

  //Add a note
  const addNote = async({title,description,tag}) => {
    console.log(title,description,tag,"re")
    // TODO:API CALL
   
    const response = await fetch(`${process.env.REACT_APP_PORT_NO}api/notes/addnote`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag})
    });
    const note  = await response.json();
    console.log(note,"res");
    setNotes(notes.concat(note));


    // let note = {
    //   _id: "64b4eb7f659cc61ebd95b5e5",
    //   user: "649d5aed3020e0aab2b0362d",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2023-07-17T07:19:27.263Z",
    //   __v: 0,
    // };
    // console.log(note);
    
  };
  //Delete a note
  const deleteNote = async (id) => {
    console.log(id, "id to be deleted");

    const response = await fetch (`${process.env.REACT_APP_PORT_NO}api/notes/deletenote/${id}`, {
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    })

    const json = await response.json();
    console.log(json)
    setNotes(
      notes.filter((data) => {
        return data._id !== id;
      })
    );
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {

    console.log (id, title, description, tag, {title,description,tag}) 
    // API CALL

    const response = await fetch(`${process.env.REACT_APP_PORT_NO}api/notes/updatenote/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}),
    });

    console.log(response,"updateres")

    const json=  await response.json();
    console.log(json);

    // let notes = notes.map(note=> {
    //   if(note._id === id) {
    //     return {...note, title: title , description:description, tag:tag}
    //   }
    //   else{return note}
    // });
    
     setNotes(notes.map(note=> {
      if(note._id === id) {
        return {...note, title: title , description:description, tag:tag}
      }
      else{return note}
    }))
    // Logic to edit notes in client
    // for (let i = 0; i < notes.length; i++) {
    //   if (notes[i]._id === id) {
    //     notes[i].title = title;
    //     notes[i].description = description;
    //     notes[i].tag = tag;
    //   }
    // }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote , editNote,getNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default Notestate;
