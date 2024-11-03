import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = ({active}) => {
   
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/"
  
  > Navbar</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse " id="navbarCollapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${active==="All"?"active":""}`} aria-current="page" to="/"
          
          >Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${active==="datascinece"?"active":""}`} to="/datascience"
           
          >Data science</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${active==="fullstack"?"active":""}`} to="/fullstack"
           
          >Full Stack</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${active==="hacking"?"active":""}`} to="/hacking"
           
          >Hacking</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${active==="youtube"?"active":""}`} to="/youtube"
           
          >Youtube</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${active==="blockchain"?"active":""}`} to="/blockchain"
           
          >BlockChain</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
