import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Title from '../Hook/Title';
import Banner from './Banner';
import CustomerReview from './CustomerReview';
import SingleCards from './SingleCards';
import StayConnected from './StayConnected';

const Home = () => {
    Title('Home')
    const datas = useLoaderData()
    return (
        <div className='p-4'>
            <div>
                <Banner></Banner>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10 mb-10">
                {datas.map(data => <SingleCards
                    key={data._id}
                    data={data}
                ></SingleCards>)}
            </div>
            <div className='text-center mb-10 '>
                <Link to="/chose-photos"><button className='bg-blue-500 p-3 rounded font-bold' >View All</button></Link>
            </div>
            <div className='bg-teal-100 p-6  md:px-10'>
                <StayConnected></StayConnected>
            </div>
            <div className='flex justify-center w-full  md:px-10 '>
                <CustomerReview></CustomerReview>
            </div>
        </div>

    );
};

export default Home;