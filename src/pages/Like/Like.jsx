import { Button, Card, Container } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router";
import { useProductContext } from "../../context/contextBank";
import { FaRegCircle } from "react-icons/fa";


function Like() {
  const {  likeList , handleLikeList , setShowId } = useProductContext();
  
      const searchId = (id) => {
      return likeList.map((item) => item.id).includes(id);
    };
  return (
    <div>
      <div style={{ marginTop: '100px' }}>
        <Container fluid="md">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="products">
              <div className="boxH2">
                <h1 style={{ color: 'black' }}><CiHeart />favorites<CiHeart /></h1>
              </div>
              <div className="boxProducts">
                {likeList && likeList.map((item) => (
                  <Card style={{backgroundColor:'#222831'}} className="product-card" key={item.id}>
                    <div className="image-wrapper">
                      <Card.Img variant="top" src={item.image} />
                      <span className="heart-icon"><Button style={{ border: '0' }} onClick={() => handleLikeList(item.id)} variant={searchId(item.id) ? "danger" : "outline-danger"}><CiHeart /></Button></span>
                    </div>
                    <Card.Body className="cardBody" style={{ justifyContent: 'center'}}>
                      <Card.Title style={{ color: '#00ADB5' }}>{item.name}</Card.Title>
                      <Card.Text>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <div style={{ margin: '0 5px' }}>
                            <div className={`${item.status === 'Alive' ? "statusAlive" : item.status === 'Dead' ? "statusDead " : "text-secondary"}`}><FaRegCircle /></div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ margin: '0 5px', color: '#EEEEEE' }}>
                              {item.status}
                            </div>
                            <div style={{ margin: '0 5px', color: '#EEEEEE' }}>
                              -
                            </div>
                            <div style={{ margin: '0 5px', color: '#EEEEEE' }}>
                              {item.species}
                            </div>
                          </div>
                        </div>
                      </Card.Text>
                      <div style={{width:'100%' , alignItems:'center'}}>
                        <Link to={`/${item.id}`}><Button onClick={()=>setShowId(item.id)} variant="outline-info">Information</Button></Link>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Like;
