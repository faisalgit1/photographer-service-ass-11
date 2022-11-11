import React from 'react';

const Banner = () => {
    return (
        <div className="p-6 rounded-lg ">
            <section>
                <div className="p-3 dark:bg-violet-400 bg-teal-100">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl mb-5 font-bold leading-none sm:text-6xl xl:max-w-3xl rounded dark:text-gray-900 text-gray-900">Stylish <span className='bg-white p-2 text-red-500'>Photographer</span></h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900 text-gray-900 font-bold">I am a professional photographer. I know how to take many types of pictures. I have been working on this for 10 years. So hire me now without delay.</p>

                    </div>
                </div>
                <img src="https://img.freepik.com/free-vector/cartoon-couple-famous-celebrities-red-carpet-with-paparazzi_33099-657.jpg?size=626&ext=jpg&ga=GA1.2.245939490.1665506832" alt="" className="w-3/4 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
        </div>
    );
};

export default Banner;