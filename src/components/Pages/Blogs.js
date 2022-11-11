import React from 'react';
import Title from '../Hook/Title';

const Blogs = () => {
    Title('Blog')
    return (
        <div>
            <div className='px-4 bg-white  text-slate-800 dark:text-white dark:bg-slate-900  md:px-20'>
                <div className='flex justify-center'>
                    <h1 className='text-center text-3xl text-slate-800 dark:text-white rounded px-2 w-40 font-bold mt-5 md:my-10 '> Blogs </h1>
                </div>
                <div className='flex md:flex-row flex-col py-4 justify-around'>
                    <div className='my-5'>
                        <h2 className='text-2xl font-bold'>Difference between SQL and NoSQL?</h2>
                        <p className="w-80 md:w-96 font-semibold">
                            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL
                        </p>
                    </div>
                    <div className='my-5'>
                        <h2 className='text-2xl font-bold'>What is JWT, and how does it work?</h2>
                        <p className="w-80 md:w-96 font-semibold">
                            What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                            WT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                        </p>
                    </div>

                </div>
                <div className='flex md:flex-row flex-col py-4 justify-around'>


                    <div className='py-5'>
                        <h2 className='text-2xl w-80 md:w-96 font-bold'>What is the difference between javascript and NodeJS?</h2>
                        <p className="w-80 md:w-96 font-semibold">
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.

                        </p>
                    </div>

                    <div className='my-5'>
                        <h2 className='text-2xl w-80 md:w-96 font-bold'>How does NodeJS handle multiple requests at the same time?</h2>
                        <p className="w-80 md:w-96 font-semibold">
                            How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </p>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default Blogs;