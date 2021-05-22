import React,{ useState,useContext} from 'react'
import { Container,Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { AppContext } from '../context/AppContext'

import {myDatabase, myStorage,timestamp} from '../firebase/config'

const AlbumPage = () => {

  let history = useHistory()

  const [selectedFile,setSelectedFile] = useState(null)
  const [showFileSelected,setShowFileSelected] = useState("Please select a photo")
  const [postCaption,setPostCaption] = useState('')
  
  

  const {currentUser} = useContext(AppContext)

 

  const types = ["image/jpeg",'image/png']

    

    const handleChange = e => {
      const selected = e.target.files[0]
      if(selected && types.includes(selected.type)){
        setSelectedFile(selected)
        setShowFileSelected(selected.name)
      }
      else{
        setSelectedFile(null)
        alert('Only png and jpeg are accepted !')
        setShowFileSelected('Please select a picture')
      }
    }

    const handleCaptionChange = e => {
      setPostCaption(e.target.value)
    }

    const handleClick = (e) => {
      if(!selectedFile && !postCaption){
         alert('Please fill the form')
      }
      else{
         
        const uploadTask = myStorage.ref(`/images/${selectedFile.name}`).put(selectedFile);
    uploadTask.on("state_changed", console.log, console.error, () => {
      myStorage
        .ref("images")
        .child(selectedFile.name)
        .getDownloadURL()
        .then((url) => {
         
          myDatabase.collection('posts').add({pictureUrl:url,
            username:currentUser.displayName,
            createdAt:timestamp(),
            caption:postCaption,
          dateCreated:new Date().toLocaleDateString()})
        });
    });
        
        
        console.log('clicked')
        setSelectedFile(null)
        setShowFileSelected('Please select a photo')
        setPostCaption('')
        history.push('/view-album-page')
      }
    }

    
    
    return (


        <Container className='write-post-container d-flex align-items-center my-5 flex-column'>

          <button onClick={()=>history.push('/view-album-page')} className='my-5 albumpage-goback-button'>Go back</button>
          
          <Card className='write-post-card my-2'>
            
            
            <Card.Body>
              
                <div className='d-flex justify-content-center'>
                  
                <div className='h-100 w-100 d-flex justify-content-center'>
       <input type="file" id="actual-btn"   onChange={handleChange}hidden/>
       <label htmlFor="actual-btn" className='form-file-label mx-2  text-center' >+</label>
       <span className='span-file-selected'>{showFileSelected}</span>
    
   </div>
                </div>
                 <div className='d-flex  justify-content-center input-text-div mx-auto my-3'>
                <textarea as="textarea" className='write-quote-input-text my-2 p-1 h-70' onChange={handleCaptionChange} placeholder='Please insert a caption' 
                value={postCaption}/>
                </div>
                 
              
            
            </Card.Body>
           
             <button className='post-album-button d-block mr-2 ml-auto text-center  mb-1 mx-2  ' onClick={handleClick}>Post</button>
            
        </Card>
          </Container>
    )
}

export default AlbumPage
