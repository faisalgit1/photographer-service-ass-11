import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import SingleCards from './SingleCards';

const Home = () => {
    const datas = useLoaderData()
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10">
                {datas.map(data => <SingleCards
                    key={data._id}
                    data={data}
                ></SingleCards>)}
            </div>
            <div className='text-center '>
                <Link to="/chose-photos"><button className='bg-blue-500 p-3 rounded font-bold' >View All</button></Link>
            </div>
        </div>

    );
};

export default Home;