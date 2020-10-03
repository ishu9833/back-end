import React, { useState } from 'react';
import './Home.css';
import fakeData from '../FakeData/FakeData';
import VolunteerWorks from '../VolunteerWorks/VolunteerWorks';

const Home = () => {
    const works = fakeData;
    console.log(works);
    const [volunteerWorks, setVolunteerWorks] = useState(works);
    return (
        <div className="container">
            <h1>hello</h1>
        </div>
    );
};

export default Home;