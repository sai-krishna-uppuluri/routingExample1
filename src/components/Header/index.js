import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <div className="navbar-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave"
      />
      <h1 className="heading header-margin"> Wave </h1>
    </div>
    <div className="nav-header-container">
      <ul className="nav-headers">
        <li className="heading header-margin cursor">
          <Link to="/home">Home</Link>
        </li>
        <li className="heading header-margin cursor">
          <Link to="/about">About</Link>
        </li>
        <li className="heading header-margin cursor">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
