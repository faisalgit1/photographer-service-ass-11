import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const SingleCards = ({ data }) => {
    const { name, price, details, img, ratings } = data
    return (
        <div className=' mb-2 mr-2.5 border border-green-600 bg-teal-100 rounded '>
            <div className="  gap-2 p-6 rounded-md border  shadow-md dark:bg-gray-900 dark:text-gray-50">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>

                <div className="mt-6 mb-3">
                    <h2 className="text-xl text-center text-gray-800 font-bold tracking-wide">{name}</h2>
                </div>
                <div className='flex justify-between mb-3'>
                    <div className='text-bold text-2xl text-gray-800'>
                        Price: ${price}
                    </div>
                    <div className='text-bold text-2xl text-gray-800'>
                        Ratings: {ratings}
                    </div>
                </div>
                <div className='mb-2'>
                    <p className="dark:text-gray-800 text-gray-800">{details ? details.slice(0, 200) + "..." : details}</p>
                </div>
                <div className='text-center'>
                    <Link to='/photo-details'><button className="px-3 py-1 md:my-0 mt-2 font-semibold rounded  text-white bg-sky-700 mr-2">View Details</button></Link>
                </div>

            </div>
        </div>
    );
};

export default SingleCards;