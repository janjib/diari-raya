import React, { useContext } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const NavigationBar = () => {

  const {currentUser} = useContext(AppContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
  <Navbar.Brand className='ml-3'href="#home">DiariRaya</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav className='pt-1'>

      <Link to='/view-album-page' className='d-flex'><i className="fas fa-plus-circle mt-2 mx-1"></i><span className='mt-2 nav-info-text mx-2'>Post</span></Link>
      
      <Link to='/post-quote' className='d-flex'><i className="fas fa-comment-dots mt-2 mx-1"></i><span className='mt-2 nav-info-text mx-2'>Hari Raya Speech</span></Link>
      
      
      <Nav.Link >
        <i className="fas fa-user-circle">{currentUser && <span className='current-user-name my-auto ml-1'>{currentUser.displayName}</span>}</i>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavigationBar
