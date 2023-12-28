import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Notestate from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({msg:message,type:type})
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
    <Notestate>
      <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert}/>} />
            <Route path="/about" element={<About  />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login showAlert={showAlert}/>} />
            <Route path="/signup" element={<Signup showAlert={showAlert}/>} />

          </Routes>
      </BrowserRouter>
      </Notestate>
    </>
  );
}

export default App;
