import React from 'react';

const Banner = () => {
    return (
        <div className="p-6 rounded-lg ">
            <section>
                <div className="p-3 dark:bg-violet-400 bg-sky-700">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Stylish Photographer</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900 font-bold">A professional photographer is someone who creates photos for income. Professional photographers can be either part-time or full-time; most are freelancers or independent contractors who work on a project basis.</p>

                    </div>
                </div>
                <img src="https://cdn.pixabay.com/photo/2019/02/15/18/26/crystal-ball-photography-3999047__340.jpg" alt="" className="w-3/4 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
        </div>
    );
};

export default Banner;