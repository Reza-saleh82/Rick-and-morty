import { Form, NavLink } from "react-router";
import { useState } from 'react';
import './NavSite.css'
import { Button, Col, Container, Row } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";


function NavSite() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="nav">
      <Container fluid="md" className="nav-container-flex">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`boxLink ${showMobileMenu ? 'mobile-menu-active' : ''}`}>
          <div>
            <NavLink style={{color:'#229799'}} className="link-nav brand-link" to='/'>Rick and Morty</NavLink>
          </div>
          <div>
            <NavLink style={{color:'#48CFCB'}} className="link-nav" to='AboutUs'>About Us</NavLink>
          </div>
          <div>
            <NavLink style={{color:'#48CFCB'}} className="link-nav" to='Login'>Login</NavLink>
          </div>
          <div>
            <NavLink style={{color:'red',fontSize:'xx-large'}} className="link-nav" to='Login'><CiHeart /></NavLink>
          </div>
        </div>
        <div className={`boxSearch ${showMobileMenu ? 'mobile-menu-active' : ''}`}>
            <div>
              <Button variant="outline-secondary">search</Button>
            </div>
            <div>
            <input type="text" className="mr-sm-2 searchInput"/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavSite;