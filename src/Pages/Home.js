import React from 'react';
import { Carousel } from 'react-bootstrap';
import a from '././../assets/images/a.png';
import b from '././../assets/images/b.png';
import './All.css'

const Home = () => {
    return (
        <div>
            <div className='container2 mb-5 mt-5'>
             <i><h1>Welcome!</h1>
             <h1>BD Web Development Course.</h1></i>
            </div>
            <div className='container1 mb-5'>
            <Carousel>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={a}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={b}
                    alt="Second slide"
                />
            </Carousel.Item>
            </Carousel>
            </div>
        </div>
        
    );
};

export default Home;