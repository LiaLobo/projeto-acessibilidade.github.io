import React, { Fragment } from 'react'

import './tips.css'

const Tips = (props) => (
    <Fragment tabindex='0'>
        <h2 className='tips-title'>{props.title}</h2>
        <p className='tips-text'>{props.text}</p>
        <img src={props.source} alt={props.alt} className='tips-img'/>
    </Fragment>
)

export default Tips