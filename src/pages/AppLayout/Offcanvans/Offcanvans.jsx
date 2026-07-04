import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { Button, Card, Offcanvas } from 'react-bootstrap';
import { useProductContext } from '../../../context/contextBank';
import './Off.css'
import { FaRegCircle } from 'react-icons/fa';
import { Link } from 'react-router';

// import { Container } from './styles';

function Offcanvans() {
    const { show, setShow, likeList } = useProductContext();

    const searchId = (id) => {
    return likeList.map((item) => item.id).includes(id);
  };
    return (
        <div>
            <Offcanvas style={{backgroundColor:'#222831'}} show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header style={{alignItems:'center',display:'flex'}} closeButton>
                    <Offcanvas.Title style={{ color: '#EEEEEE' }}>Login</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='ofBox'>
                        
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Offcanvans;
