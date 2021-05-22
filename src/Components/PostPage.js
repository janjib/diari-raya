import React,{useEffect} from 'react'
import {Container} from 'react-bootstrap'
import QuoteCard from './QuoteCard'
import {useHistory} from 'react-router-dom'
import useDatabase from '../hooks/useDatabase'



const PostPage = () => {

  let history = useHistory()

  
  const {docs} = useDatabase('quotes')

  console.log(docs)

  

    return (
        <>
        <Container className='post_section_container d-flex align-items-center my-5 flex-column' >
         
          
         {docs.map((item,index) => {
           return <QuoteCard item={item} key={index} />
         })}

                  <button className='create-quote-button m-3 p-1' onClick={()=>history.push('/write-quote')}><i className="fas fa-plus"></i></button>

        </Container>
        </>
    )
}

export default PostPage
