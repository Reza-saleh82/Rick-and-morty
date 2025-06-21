import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './Home.css'
import { useProductContext } from "../../context/contextBank";
import { Link } from "react-router";
import { CiHeart } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";


function Home() {
  const { productsData } = useProductContext();
  console.log('productsData in Home:', productsData);
  return (
    <>
      <div style={{ marginTop: '100px' }}>
        <Container fluid="md">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="products">
              <div className="boxH2">
                <h1 style={{color:'#229799'}}>character</h1>
              </div>
              <div className="boxProducts">
                {productsData && productsData.map((item) => (
                  <Card style={{backgroundColor:'#424242'}} className="product-card" key={item.id}>
                    <div className="image-wrapper">
                      <Card.Img variant="top" src={item.image} />
                      <span className="heart-icon"><Button variant="outline-danger"><CiHeart /></Button></span>
                    </div>
                    <Card.Body style={{justifyContent:'center'}}>
                      <Card.Title style={{color:'#229799'}}>{item.name}</Card.Title>
                      <Card.Text>
                        <div style={{display:'flex',flexDirection:'row'}}>
                          <div style={{margin:'0 5px'}}>
                            <div className={`${item.status == 'Alive' ? "statusAlive" : "statusDead "}`}><FaRegCircle /></div>
                          </div>
                          <div style={{display:'flex',flexDirection:'row'}}>
                            <div style={{margin:'0 5px',color:'white'}}>
                              {item.status}
                            </div>
                            <div style={{margin:'0 5px',color:'white'}}>
                              -
                            </div>
                            <div style={{margin:'0 5px',color:'white'}}>
                              {item.species}
                            </div>
                          </div>
                        </div>
                      </Card.Text>
                      <Link to={`/product:${item.id}`}><Button variant="outline-dark">imfo</Button></Link>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

    </>
  )
}

export default Home;