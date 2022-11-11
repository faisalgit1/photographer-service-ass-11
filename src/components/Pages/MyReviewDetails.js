import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const MyReviewDetails = ({ comment, handleDeleteReview }) => {
    const [myReview, setReview] = useState([])
    useEffect(() => {
        fetch('https://server-assignment-11-faisalgit1.vercel.app/chose-photos')
            .then(res => res.json())
            .then(data => {
                const commentedService = data.filter(d => d._id === comment.reviewerID)
                setReview(commentedService)
            })
    }, [comment.reviewerID])

    return (
        <div className='flex justify-center border border-sky-400 m-2 rounded'>

            <div className="w-full p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={myReview[0]?.img} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold mb-1">{myReview[0]?.name}</h2>
                        <p className="text-2xl dark:text-gray-400">Your Comment: <span className='text-green-500'>{comment.review}</span></p>
                    </div>
                    <div className="space-y-1 flex justify-center">

                        <div className='flex my-2 ml-0 md:ml-40'>

                            <Link to={`/update-review/${comment._id}`}>
                                <button type="button" className="px-4 py-2 mr-4 font-semibold rounded border bg-sky-500 hover:bg-sky-700 text-white">Edit</button>

                            </Link>
                            <button onClick={() => handleDeleteReview(comment._id)} type="button" className="px-4 py-2 mr-4 font-semibold rounded bg-red-400 hover:bg-red-700 border border-white text-white-800">Delete</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyReviewDetails;