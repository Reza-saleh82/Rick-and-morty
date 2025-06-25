import { Form, NavLink } from "react-router";
import { useState } from 'react';
import './NavSite.css'
import { Button, Col, Container, Row } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useProductContext } from "../../context/contextBank";
import { CiLogin } from "react-icons/ci";


function NavSite() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { setSearchData, setShow, show } = useProductContext();



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
            <NavLink style={{ color: '#00ADB5' }} className="link-nav brand-link" to='/'>Rick and Morty</NavLink>
          </div>
          <div>
            <NavLink style={{ color: '#FFB823' ,fontFamily:'fantasy', fontSize:'x-large' }} className="link-nav">IMDB</NavLink>
          </div>
          <div>
            <NavLink style={{ color: '#EEEEEE' }} className="link-nav" onClick={() => setShow(true)}>Login<CiLogin style={{fontSize:'x-large'}}/></NavLink>
          </div>
          <div>
            <NavLink to='like'>
              <Button style={{ border: '0' }} variant="outline-danger" >
                <CiHeart style={{ fontSize: 'x-large' }} />
              </Button>
            </NavLink>
          </div>
        </div>
        <div className={`boxSearch ${showMobileMenu ? 'mobile-menu-active' : ''}`}>
          <div>
            <Button variant="outline-info">search</Button>
          </div>
          <div>
            <input onChange={(e) => setSearchData(e.target.value)} type="text" className="mr-sm-2 searchInput" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavSite;