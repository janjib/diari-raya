import React from 'react'
import { Card } from 'react-bootstrap'


const QuoteCard = ({item}) => {
    return (
        <Card className='quotes-card my-2 '  >
            <Card.Body>
                <Card.Title className=''><i className="fas fa-user-circle mx-2 pb-3"></i><span className='post-owner-name'>{item.quotesOwner}</span></Card.Title>
                <Card.Text className='quote-text'>{item.quotesText}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default QuoteCard
