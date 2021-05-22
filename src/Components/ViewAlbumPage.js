import React, {  useState } from 'react'
import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router'
import useDatabase from '../hooks/useDatabase'
import Modal from './Modal'
import {motion} from 'framer-motion'




const ViewAlbumPage = () => {

    let history = useHistory()

    const [selectedImage,setSelectedImage] = useState(null)

    const {docs} = useDatabase('posts')
    

    const handleClick = e => {

     setSelectedImage({pictureUrl:e.target.src,
        caption:e.target.dataset.caption,
        username:e.target.dataset.username,
        dateCreated:e.target.dataset.datecreated,
        })

    }

    

    return (
        <Container className='view-albumpage-container h-100 d-flex justify-content-center flex-wrap my-5 mx-auto' >
            {docs&&docs.map(({pictureUrl,id,username,caption,dateCreated}) => {
                 return <motion.img src={pictureUrl} alt="" className='post-preview img-fluid my-4 mx-2' key={id} 
                 data-username={username} data-caption={caption} data-datecreated={dateCreated} onClick={handleClick}  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} layout/>
            })}
        {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
         <button className='create-post-button m-3 p-1' onClick={()=>history.push('/album-page')}><i class="fas fa-plus"></i></button>
        </Container>
    )
}

export default ViewAlbumPage
