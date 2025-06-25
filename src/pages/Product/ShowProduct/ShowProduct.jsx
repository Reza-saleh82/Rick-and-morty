import React, { useEffect, useState } from 'react';
import { useProductContext } from '../../../context/contextBank';
import { Col, Container, Row } from 'react-bootstrap';
import './show.css'
import { FaRegCircle } from 'react-icons/fa';

function ShowProduct() {
    const { productsData, showId } = useProductContext()
    const [selectItem, setSelectItem] = useState({})
    useEffect(() => {
        productsData.map((item) => {
            if (item.id == showId) {
                setSelectItem(item)
            }
        })
    }, [showId])
    console.log(selectItem);

    return (
        <div>
            <Container>
                <div className='showBox'>
                    <div className='productBox'>
                        <Row>
                            <Col>
                                <div className="maghale-img-box">
                                    <img src={selectItem.image} alt={selectItem.name} className="maghale-img" />
                                </div>
                            </Col >
                            <Col>
                                <div className='imfoBox'>
                                    <div>
                                        <h2>{selectItem.name}</h2>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div>
                                            <div className={`${selectItem.status == 'Alive' ? "statusAlive" : selectItem.status == 'Dead' ? "statusDead " : "text-secondary"}`}><FaRegCircle /></div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ margin: '0 5px', color: '#EEEEEE' }}>
                                                {selectItem.status}
                                            </div>
                                            <div style={{ margin: '0 5px', color: '#EEEEEE' }}>
                                                -
                                            </div>
                                            <div style={{ margin: '0 5px', color: '#EEEEEE' }}>
                                                {selectItem.species}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ShowProduct;