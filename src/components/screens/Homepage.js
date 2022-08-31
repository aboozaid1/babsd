import React from 'react'
import { Container, Nav, Navbar, Button, Form, Carousel, Card, CardGroup, Dropdown } from "react-bootstrap";
import Rating  from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

function Homepage(){

    let navigate = useNavigate();
    return (
        <div> <div className="App">

        {/* NAV BAR */}
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
          <Container>
          
            <Navbar.Brand href="#home">
              <img
                src="./images/logo.jpg"
                width={100}
                height={100}
                className="d-inline-block align-top"
              ></img>
              {''}<h1 className="brandName">Big Beach</h1>
            </Navbar.Brand>
           
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Form className="d-flex">
                    <Form.Control
                      type="search"
                      
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-secondary" >Search</Button>
                  </Form>
              </Nav>
              
              <Nav>
                <Nav.Link href="#reviews">
                  <img
                  src="./images/pen.png"
                  height={30}
                  width={30}
  
                  >
                    </img>
                    Reviews
                    </Nav.Link>
                <Nav.Link  href="#alerts">
                    <img
                    src="./images/bell.png"
                    height={30}
                    width={30}
                    ></img>
                    Alerts
                </Nav.Link >
                <Nav.Link href="trips">
                  <img
                  src="./images/trips.png"
                  height={30}
                  width={30}
                  ></img>
                  Trips
                </Nav.Link>
              </Nav>
             
             
            </Navbar.Collapse>
          </Container>
        </Navbar>
       
        <Navbar className="subBar mt-3 mb-3">
          <Button variant="outline-primary" className="btn" onClick={() => {navigate ("/hotels")}}>Hotels</Button>
          <Button variant="outline-primary" className="btn" onClick={() => {navigate ("/restaurants")}}>Restaraunts</Button>
          <Button variant="outline-primary" className="btn" onClick={() => {navigate ("/thingstodo")}}>Things to Do</Button>
          <Button variant="outline-primary" className="btn" onClick={() => {navigate ("/travel")}}>Travel</Button>
          <Dropdown>
          <Dropdown.Toggle variant="outline-primary" id="dropdown-basic" className="btn">
            More
            </Dropdown.Toggle>
            <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Car Hire</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Travel Vlogs</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Help Center</Dropdown.Item>
        </Dropdown.Menu>
          </Dropdown>
        </Navbar>
        
  
        {/* CAROUSEL */}
      <div className="carouselDiv">
        <Carousel fade className="topDecor" variant="light" >
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-75 h-50 img-fluid "
            src="./images/hyd.webp"
            alt="Hyderabad"
          />
          <Carousel.Caption>
            <h3>Hyderabad</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-75 h-50 img-fluid "
            src="./images/delhi.jpg"
            alt="Delhi"
          />
  
          <Carousel.Caption>
            <h3>Delhi</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-75 h-50 img-fluid "
            src="./images/rajasthan.jpg"
            alt="Rajasthan"
          />
  
          <Carousel.Caption>
            <h3>Rajasthan</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
  
      {/* cards */}
  
      <h3 className="mt-3 mb-0 ms-3 subHeads">Top destinations for your next holiday</h3>
      
      <CardGroup>
      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/banglore.jpg" />
        <Card.Body>
          <Card.Title>Banglore</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      
      <Card  className="m-5 ">
        <Card.Img src="./images/dubai.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="cities">Dubai, United Arab Emirates</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Card  className="m-5">
        <Card.Img src="./images/london.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="cities">London, UK</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Card  className="m-5">
        <Card.Img  src="./images/jaipur.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="cities" >Jaipur, India</Card.Title> 
        </Card.ImgOverlay>
      </Card>
      </CardGroup>
  
      <h3 className="mt-3 mb-0 ms-3 subHeads">Things to do in Hyderabad</h3>
     <CardGroup>
     <Card style={{ width: '18rem' }} className="m-5 site">
        <Card.Img variant="top" style={{height :"100%"}} src="./images/charminar1.jpg" />
        <Card.Body>
          <Card.Title>Charminar</Card.Title>
          <Card.Text>
            Religious Sites, Monuments and Statues
          </Card.Text>
          <Card.Text>
          <Rating name="half-rating-read" defaultValue={4} precision={1} readOnly />
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
  
      <Card style={{ width: '18rem' }} className="m-5 site">
        <Card.Img variant="top"  style={{height :"100%"}} src="./images/golconda.jpg" />
        <Card.Body>
          <Card.Title>Golconda Fort</Card.Title>
          <Card.Text>
            Castles, Historic Sites
          </Card.Text>
          <Card.Text>
          <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
  
      <Card style={{ width: '18rem' }} className="m-5 site">
        <Card.Img variant="top" style={{height :"100%"}} src="./images/salarjung.jpg" />
        <Card.Body>
          <Card.Title>Salar Jung Museum</Card.Title>
          <Card.Text>
            Art Museums
          </Card.Text>
          <Card.Text>
          <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
          
        </Card.Body>
      </Card>
     </CardGroup>
      </div></div>
    )
}

export default Homepage