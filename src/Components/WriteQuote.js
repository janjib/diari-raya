import React, { useState,useRef } from 'react'
import {Container,Card} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import { timestamp } from '../firebase/config';
import sendQuoteToDatabase from '../hooks/sendQuoteToDatabase';


const WriteQuote = () => {

  const [quotesOwner,setQuotesOwner] = useState('');
  const [quotesText,setQuotesText] = useState('');

const handleQuotesOwnerChange = e => {
setQuotesOwner(e.target.value)

}

const handleQuotesTextChange = e => {
setQuotesText(e.target.value)

}
const doneRef = useRef()

  const handleClick = e => {
    e.preventDefault()
    if(!quotesOwner && !quotesText){
     alert('Please fill the form !')
    }

    else{
      let quotesData = {quotesOwner,quotesText,createdAt:timestamp()}
   sendQuoteToDatabase(quotesData)

   setQuotesOwner('')
   setQuotesText('')
   doneRef.current.style.display = 'flex'
   history.push('/post-quote')
  }
  }

    let history = useHistory()
    return (
        <>
        <Container className='write-quote-container d-flex align-items-center my-5 flex-column'>
          <button className='write-quote-go-back-button p-3 mb-5' onClick={()=>history.push('/post-quote')}>Go Back</button>
          <Card className='write-quote-card my-2'>
            
            
            <Card.Body>
              
                <div className='d-flex justify-content-center'>
                  
                <input type="text" className='write-quote-input-user p-2' placeholder='Post as ...' value={quotesOwner} onChange={handleQuotesOwnerChange}/>
                </div>
                 <div className='d-flex justify-content-center input-text-div mx-auto my-3'>
                <textarea as="textarea" className='write-quote-input-text my-2 p-1' placeholder='Write your Ucapan Hari Raya here' value={quotesText} onChange={handleQuotesTextChange} />
                </div>
            </Card.Body>
            
            <button className='post-quote-button d-block mr-2 ml-auto text-center my-3'  onClick={handleClick}><i style={{display:'none'}} ref={doneRef} className="fas fa-check-circle mx-2"></i>Post</button>
            
        </Card>
        
          </Container>
          </>
    )
}

export default WriteQuote
