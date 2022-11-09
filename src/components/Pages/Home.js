import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='text-center '>
                <Link to="/chose-photos"><button className='bg-blue-500 p-3 rounded font-bold' >View All</button></Link>
            </div>
        </div>

    );
};

export default Home;