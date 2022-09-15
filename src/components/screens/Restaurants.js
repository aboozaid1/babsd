import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Restaurants(){
    return(
        <div>
            <div>
            <h1 className='head-align-middle'>Restaraunts in Hyderabad</h1>
            <h4 className="mt-3 mb-0 ms-3 ">Browse by Hyderabad by food</h4>
            </div>
            <div>
            <Card style={{ width: '18rem' }} className="foodCard">
      <Card.Img variant="top" src="https://www.thespruceeats.com/thmb/t4apZvgq7INlHD5Pxw7VO2XSjv0=/4077x2713/filters:no_upscale()/cafe-au-lait-recipe-1374920-step-05-8370cb9f28614c2b82faa8695dc3cbe7.jpg" />
      <Card.Body>
        <Card.Title>Cafe</Card.Title>
      </Card.Body>
    </Card>
            </div>
        </div>
    )
}

export default Restaurants