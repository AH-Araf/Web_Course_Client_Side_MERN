import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const SingleCart = () => {
    const a = useLoaderData();
    console.log(a);
    const {id, name, image_url, details} =a;

    
    
    return (
        <div className='single-course-container'> 
            <div ref={ref}>
                <p className='write1'>{name}
                <Pdf targetRef={ref} filename={name}>
                        {({ toPdf }) => <button className='btn-pdf' onClick={toPdf}>Download PDF</button>}
                    </Pdf>
                </p>
                <img src={image_url} alt="" />
                <i><b><p>{details}</p></b></i>
            </div>
            <div className='mb-5 mt-4 d-flex justify-content-center ms-5 me-5'>
                <Button   variant="outline-success"><Link className='btn-a' to={`/checkout/${id}`}>Get Premium Access</Link></Button>
            </div>
        </div>
    );
};

export default SingleCart;