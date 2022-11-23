import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch('https://a10-server-site.vercel.app/course-api')
        .then( res => res.json())
        .then(data => setCourse(data));
    },[])
    return (
        <div>
            <h4>Total Courses: {course.length}</h4>
            <div>
            {
                    course.map(courses => <div className='mb-3'
                         key={courses.id}>
                        <Link to={`/courses/${courses.id}`}> {courses.name}</Link><br />
                        </div>      
                    )   
                }
                
            </div>
        </div>
    );
};

export default LeftSideNav;