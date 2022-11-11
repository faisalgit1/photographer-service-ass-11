import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import Title from '../Hook/Title';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    Title('My Review')
    const { logOut, user } = useContext(AuthContext)
    console.log(user.email)

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://server-assignment-11-faisalgit1.vercel.app/review?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('photoToken')}`
            }
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setComments(data);
            })
    }, [logOut, user?.email])
    console.log(comments)

    const handleDeleteReview = (id) => {
        console.log(id)
        fetch(`https://server-assignment-11-faisalgit1.vercel.app/allreview/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.error('Delete Success')
                    const restComments = comments.filter(comment => comment._id !== id)

                    setComments(restComments)
                }
            })

    }

    return (
        <div className='px-4 mb-60 md:px-48 my-10'>
            {
                comments.length === 0 ?

                    <div className='text-center text-nothing '>
                        <h1 className='md:text-4xl text-2xl font-bold  '> You Don't have Review</h1>

                    </div>

                    :

                    <>
                        {
                            comments?.map(comment => <MyReviewDetails
                                key={comment._id}
                                comment={comment}
                                handleDeleteReview={handleDeleteReview}
                            ></MyReviewDetails>)
                        }
                    </>

            }
        </div>
    );
};

export default MyReview;