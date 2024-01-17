import React from 'react'
import Tut from './Tut'

import tutorialList from './tutorialList'
import './Card.css'

const TutList = () =>
{
    return (
        <div className='cards'>
            {tutorialList.map( (tuts) =>
            <Tut
            key = {tuts.key}
            avatar = {tuts.avatar}
            name = {tuts.name}
            description = {tuts.description}
            star = {tuts.star}
        />)}
        </div>
        )
}

export default TutList