import React, { Fragment } from 'react'

import './tips.css'

const Tips = (props) => (
    <Fragment>
        <h2 className='tips-title'>{props.title}</h2>
        <p>{props.text}</p>
        <img src={props.source} alt={props.alt}/>
    </Fragment>
)

export default Tips