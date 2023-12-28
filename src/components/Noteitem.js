import React, { useEffect ,useContext} from "react";
import noteContext from "../context/notes/noteContext";
function Noteitem(props) {
  const { note ,updateNote} = props;
  const context = useContext(noteContext);
  const { deleteNote,editNote } = context;
  const handleDelete = (id) => {
  deleteNote(id);
  }
  const handleEdit = (id, title, description, tag)=> {
    editNote(id, title, description, tag)
  }
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title"> {note.title}</h5>
            <i className="fa-solid fa-trash-can mx-2" onClick={()=>{
              handleDelete(note._id)
              props.showAlert("Deleted Successfully","success")
            }}></i>
            <i className="fa-regular fa-floppy-disk mx-2" onClick={()=>{updateNote(note)}}></i>
          </div>

          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
