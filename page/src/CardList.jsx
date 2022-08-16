
import React from 'react'
import Card from './Card'

import articleList from './articleList'
import './Card.css'

const CardList = () =>
{
    return (
        <div className='cards'>
            {articleList.map( (article) =>
            <Card
            key = {article.key}
            avatar = {article.avatar}
            name = {article.name}
            description = {article.description}
            star = {article.star}
        />)}
        </div>
        )
}

export default CardList