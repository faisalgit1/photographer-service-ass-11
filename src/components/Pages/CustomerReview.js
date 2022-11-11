import React from 'react';
import { Link } from 'react-router-dom';

const CustomerReview = () => {
    return (
        <div>
            <section className=" mt-10 dark:bg-violet-400 bg-teal-100 dark:text-gray-900">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    <h1 className="text-5xl font-bold leading-none text-gray-900  text-center">Why You Hire me?</h1>
                    <p className="pt-2 pb-8 text-xl font-medium text-center text-gray-900">I can take very beautiful pictures. I will show your pictures in such a way that you will be surprised to see them. I am an expert in photography. I provide many photography services. You can buy the service you like. I will try to take the best picture.</p>
                    <Link to='/blog'>
                        <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-gray-800 bg-red-500 text-white font-bold dark:text-gray-50">Read Blog</button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CustomerReview;