import React from 'react'
import { NavLink } from 'react-router-dom'

const MainHeader = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-sm ">
            <a className="navbar-brand" href="/home">UsersApp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                   <NavLink activeStyle={{color: "rgb(14,110,253)"}} className="nav-link" to="/home">Home</NavLink>
                 </li>
                 <li className="nav-item">
                   <NavLink activeStyle={{color: "rgb(14,110,253)"}} className="nav-link" to="/allusers">Users</NavLink>
                 </li>
                 <li className="nav-item">
                   <NavLink activeStyle={{color: "rgb(14,110,253)"}} className="nav-link" to="/newuser">Create New User</NavLink>
                 </li>
               </ul>
            </div>
         </div>
       </nav>
      </header>
  )
}

export default MainHeader
