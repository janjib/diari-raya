import React,{useContext} from 'react'
import { Container } from 'react-bootstrap'
import {provider,authentication} from '../firebase/config'
import {useHistory} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

import AppreciateSection from './AppreciateSection'

const Homepage = () => {

    let history = useHistory()

    const {currentUser,setCurrentUser} = useContext(AppContext)

    const handleClick = () => {
     provider.addScope('profile');
provider.addScope('email');
authentication.signInWithPopup(provider).then(function(result) {
 // This gives you a Google Access Token.
 var token = result.credential.accessToken;
 console.log('Token : ',token)
 // The signed-in user info.
 var user = result.user;
 setCurrentUser({displayName : user.displayName,email:user.email,token})
 console.log('user :',user)
 history.push('/view-album-page')
})
.catch(err => {
    alert('Error occured : ',err)
});
    }


    return (
        <Container className=''>
            <div className="d-flex hero-div flex-column justify-content-center align-items-center">
                <h1 className='homepage-title'>DiariRaya<span><img src="./images/ketupat.svg" className='ketupat-svg mx-2 img-fluid' alt="" /></span></h1>
                <button className='sign-in-button my-5 text-center p-3 ' onClick={handleClick}>Sign In With Google<span><img src="./images/google.svg" className='google-svg mx-2' alt="" /></span></button>
            </div>
           
                 <div className='appreciate-div my-5'>
                     <AppreciateSection />
                 </div>
        </Container>
    )
}

export default Homepage
