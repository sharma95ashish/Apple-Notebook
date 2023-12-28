import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
    let navigate = useNavigate();
    const handleLogout = ()=> {
        localStorage.removeItem('token');
        navigate('/login');
    }
  return (
    <div>
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout