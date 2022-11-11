import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Title from '../Hook/Title';
import AddReview from './AddReview';

const PhotoDetails = () => {
    Title('Details')
    const data = useLoaderData()
    const { name, price, _id, details, img, ratings } = data

    const { user } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const reviewMessage = form.review.value

        const review = {
            reviewerID: _id,
            reviewerName: user?.displayName,
            reviewerEmail: user?.email,
            reviewer: user?.photoURL,
            review: reviewMessage,

        }

        fetch('https://server-assignment-11-faisalgit1.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(result => {

                toast.success('Review Added')
                form.reset()
            })
            .catch(err => console.log(err))
    }

    const [allReviews, setReview] = useState([])
    useEffect(() => {
        fetch('https://server-assignment-11-faisalgit1.vercel.app/allreview')
            .then(res => res.json())
            .then(data => {

                const showReview = data.filter(d => d.reviewerID === _id)

                setReview(showReview)

            })
    }, [allReviews, _id])
    console.log(allReviews)

    return (
        <div className='p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 mb-5 mt-10'>
                <div>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-3/4  bg-gray-500" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='ml-3 md:ml-10'>
                    <h1 className='text-4xl font-bold'>{name}</h1>
                    <p className='font-semibold my-6'>{details}</p>
                    <div className='flex mb-4 items-center'>
                        Ratings : {ratings}
                    </div>
                    <p className='text-xl font-semibold'>Price:$ {price}</p>
                    <button type="button" className="px-4 mx-auto my-3 py-2 font-semibold rounded  border border-purple-500 hover:border-gray-00 bg-purple-500 hover:bg-white text-white transition  hover:text-purple-500">Purchase</button>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                {
                    allReviews.map(data => <AddReview
                        key={data._id}
                        data={data}
                    ></AddReview>)
                }
            </div>
            <div className='flex justify-center'>
                {
                    user?.uid ?
                        <>
                            <form onSubmit={handleSubmit} className='flex  gap-3 my-10 items-center'>
                                <img className='w-12 rounded-full' src={user?.photoURL} alt="" />
                                <input name='review' type="text" placeholder="Type Your Review" className="input p-2 input-bordered w-60 md:w-96" />
                                <button type='submit'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 hover:text-gray-700 text-gray-900 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </button>

                            </form>
                        </>
                        :
                        <>
                            <p className="font-semibold my-10 ">

                                Please <Link className='underline' to='/login'>Login</Link> to add a review
                            </p>

                        </>
                }
            </div>
        </div>
    );
};

export default PhotoDetails;