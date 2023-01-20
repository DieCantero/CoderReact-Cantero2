import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Login from '../Login/Login'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink to='/' className="navbar-brand">Musicación</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/categoria/clasicos' className="nav-link active">Clasicos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/categoria/novedades' className="nav-link active">Novedades</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/categoria/recomendados' className="nav-link active">Recomendados</NavLink>
        </li>
        <li className="text-light nav-item">
          <a className="nav-link active"><CartWidget/></a>
        </li>
      </ul>
      <Login/>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-outline-secondary" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar