import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className='flex justify-center'>
            <section className="flex justify-center items-center h-full p-16 ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-sky-700">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl text-sky-700">Sorry, we couldn't find this page.</p>
                        <p className='mt-10'>
                            <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-sky-400 hover:bg-sky-700 text-slate-900">Back to homepage</Link>
                        </p>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default ErrorPage;