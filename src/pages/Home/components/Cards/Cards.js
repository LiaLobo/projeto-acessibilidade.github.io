import React from 'react'
import { Card } from 'react-bootstrap'

import './cards.css'

const Cards = (props) => (
    <Card style={{ width: '18rem' }} className='cards-size' tabindex='0'>
        <Card.Img variant="top" src={props.src} className={props.classIcon} alt={props.alt}/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.children}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default Cards
