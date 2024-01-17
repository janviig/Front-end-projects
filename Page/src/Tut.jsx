
import React from 'react'
import './Card.css'

const Tut = (props) =>
{
    return(
        <div className='column'>
            <img src={props.avatar} alt="tutorials" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div className='startline'>
                <p>{props.star}</p>
            </div>
    </div>
    )
}
export default Tut