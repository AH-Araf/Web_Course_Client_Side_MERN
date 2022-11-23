import React from 'react';
import { useContext } from 'react';
import {  Container, Image, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import c from '././../assets/images/c.png';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
    const btnDay =()=>{
        document.body.style.backgroundColor= 'white';
        document.body.style.color= 'black';
    }
    const btnDark =()=>{
        document.body.style.backgroundColor= '#1a1728';
        document.body.style.color= 'white';      
    }

    // AUth
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    // 
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {user?.displayName}
        </Tooltip>
      );
    // 

    return (
        <div className='navbar-to'>
            <Navbar collapseOnSelect className='mb-4'  expand="lg" bg="light" variant="light">
            <Container>
                <img src={c} className="imageC1" alt="" />
                <Navbar.Brand><Link className='blog-name' to='/'>BD Web Course</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='blog-container' to='/'>Home</Link>  
                        <Link className='blog-container' to='/courses'>Courses</Link>
                        <Link className='blog-container'>FAQ</Link>
                        <Link className='blog-container' to='/blog'>Blog</Link>  
                        
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        
                                        <Link className='blog-container' onClick={handleLogOut}>Log out</Link> 
                                        
                                    </>
                                    :
                                    <>
                                        <Link className='blog-container' to='/login'>Login</Link> 
                                        <Link className='blog-container' to='/register'>Register</Link> 
                                    </>
                            }

                        </>
                        
                        <div  to="/profile">
                            {user?.photoURL ?
                                <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}>
                                <Button className='btn-tooltip' variant="light"><Image
                                                    style={{ height: '35px', width:'35px', marginRight: '10px' }}
                                                    roundedCircle
                                                    src={user?.photoURL}>
                                                </Image></Button> 
                                </OverlayTrigger>
                                : <FaUser></FaUser>
                            }
                        </div>
                        
                    </Nav>

                    <div className=" text-end">
                        <div className="btn-group border border-2 border-warning rounded-3" role="group" aria-label="Basic example">
                            <button onClick={btnDay} id="btn-normal" type="button" className="btn btn-light ">Day🔆</button>
                            <button onClick={btnDark} id="btn-dark" type="button" className="btn btn-dark">Dark🌙</button>
                        </div>
                        
                </div>
                     
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;