import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../Hook/Title';
import SingleCards from './SingleCards';

const PhotographerCards = () => {
    Title('Services')
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div>
            <h1 className='text-5xl text-gray-900 font-bold mt-5 mb-10 text-center'>All Sevices</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10">
                {
                    datas.map(data => <SingleCards
                        key={data._id}
                        data={data}
                    ></SingleCards>)
                }
            </div>
        </div>
    );
};

export default PhotographerCards;