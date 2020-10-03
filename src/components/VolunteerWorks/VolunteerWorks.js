import React from 'react';
import {Card} from 'react-bootstrap';
import './VolunteerWorks.css';



const VolunteerWorks = (props) => {
    console.log(props.volunteer);
    const { name, image } = props.volunteer;
    console.log(image);
    return (
        <div className="container">
            <div className="image">
                <img src={image} alt="img"/>
            </div>
            <div className="name">
                <h6>{name}</h6>
            </div>
        </div>
    )
};

export default VolunteerWorks;