import React from 'react'
import {Card} from 'react-bootstrap'
import {motion} from 'framer-motion'

const Modal = ({selectedImage,setSelectedImage}) => {

    const handleClick = e => {
     if(e.target.classList.contains('backdrop')){
         setSelectedImage(null)
     }
    }

    console.log(selectedImage.createdAt)

    return (
        <>
        <motion.div className='backdrop' onClick={handleClick} initial={{opacity:0}} animate={{opacity:1}}>
            
             <Card className='modal-card'  >
  
  <Card.Body>
    <div className="d-flex justify-content-between">
        <Card.Title>{selectedImage.username}</Card.Title>
        <span>{selectedImage.dateCreated}</span>
    </div>
    
    <Card.Img variant="top" src={selectedImage.pictureUrl} className='backdrop-img img-fluid' />
    <Card.Text className='caption-card-part p-1 m-1'>
     {selectedImage.caption}
    </Card.Text>
    
  </Card.Body>
</Card>
        </motion.div>
        </>
    )
}

export default Modal
