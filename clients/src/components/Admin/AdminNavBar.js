import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminNavBar() {
  return (

<nav class="nav flex-column w-2">
  <a class="nav-link active" href="/profile">Profile</a>
  <a class="nav-link" href="/userlist">User List</a>
  <a class="nav-link" href="#">Assignment / Template</a>
  {/* <a class="nav-link">Disabled</a> */}
</nav>
//     <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
//     {/* <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//    */}
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item active">
//           <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/userlist">User List</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Assignment / Template</a>
//         </li>
//       </ul>
//       <form className="form-inline my-2 my-lg-0">
//         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//       </form>
//     </div>
//   </nav></div>
  )
}

export default AdminNavBar