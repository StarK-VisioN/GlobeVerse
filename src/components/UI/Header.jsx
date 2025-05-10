import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

function Header() {
    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
        return setShow(!show);
    }

    return (
        <>
        <header>
          <div className="container">
            <div className="grid navbar-grid">
              <div className="Logo">
                <NavLink to="/">
                  <h1>GlobeVerse</h1>
                </NavLink>
              </div>

              <nav className={show ? "menu-mobile" : "menu-web"}>
                <ul>
                  <li>
                    <NavLink to="/" 
                             className={({ isActive }) => (isActive ? 'active' : '')}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" 
                             className={({ isActive }) => (isActive ? 'active' : '')}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/country" 
                             className={({ isActive }) => (isActive ? 'active' : '')}>
                      Country
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" 
                             className={({ isActive }) => (isActive ? 'active' : '')}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="ham-menu">
                <button onClick={handleButtonToggle}>
                  <GiHamburgerMenu />
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className={`mobile-menu-spacer ${show ? 'active' : ''}`}></div>
      </>
    );
}

export default Header;
