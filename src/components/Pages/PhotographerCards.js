import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCards from './SingleCards';

const PhotographerCards = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div>
            <h1 className='text-2xl'>We have 6 items Service</h1>
            {
                datas.map(data => <SingleCards
                    key={data.id}
                    data={data}
                ></SingleCards>)
            }
        </div>
    );
};

export default PhotographerCards;