import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

function Addnote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  console.log(note, "value of note");
  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    addNote({
      title: note.title,
      description: note.description,
      tag: note.tag,
    });
    props.showAlert("Note Added Successfully","success")
    setnote({title:"", description:"",tag:""});
  };
  return (
    <div className="container my-3">
      <h2> Add a Note</h2>
      <form className="my-3">
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Title
          </label>

          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={note.title}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <div></div>
        <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={note.title.length<5 || note.description.length<5}>
          Add a note
        </button>
      </form>
    </div>
  );
}

export default Addnote;
