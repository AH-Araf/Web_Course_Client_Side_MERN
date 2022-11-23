import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CoursesCart from './CoursesCart';
import LeftSideNav from './LeftSideNav';

const Courses = () => {
    return (
        <div className='ms-lg-4 me-lg-4 mb-5'>
            <i><h3 className='container2'>Welcome To Our Web Courses Page</h3></i>
                <Row>
                    <Col className='d-block col-12 col-lg-2 d-lg-flex justify-content-center cart-courses'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col className='d-block col-12 col-lg-10 d-lg-flex justify-content-center left-nav-courses'>
                        <CoursesCart></CoursesCart>
                    </Col>
                </Row>
                
        </div>
    );
};

export default Courses;