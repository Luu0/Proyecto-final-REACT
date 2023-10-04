import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link style={{ textDecoration: "none" }} to={"/"}>Inicio</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <NavLink style={{ textDecoration: "none" }} to={"category/Mancuerna"}>
              <li className="nav-item">
                <h2 className="nav-link active" aria-current="page" >Mancuernas</h2>
              </li>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to={"category/Disco"}>
              <li className="nav-item">
                <h2 className="nav-link active" aria-current="page">Discos</h2>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="d-flex">
          <CartWidget/>
          <p className="text-light">4</p>
        </div>
      
      </div>
    </nav>
  )
}

export default NavBar