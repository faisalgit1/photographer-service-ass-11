import React from 'react';
import toast from 'react-hot-toast';

const AddPhotoService = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const photoURL = form.photourl.value;
        const details = form.details.value;
        console.log(name, price, photoURL, details)

        const allService = {
            name: name,
            img: photoURL,
            price: price,
            details: details
        }
        console.log(allService)
        fetch('https://server-assignment-11-faisalgit1.vercel.app/chose-photos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allService)
        })
            .then(result => {
                console.log(result);
                form.reset()
                toast.success('You Added a new service')
            })

            .then(err => console.log(err, "error"))
    }

    return (
        <div className='flex justify-center  '>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100  border shadow-4xl border-sky-400">
                <h1 className="text-2xl font-bold text-center">Add Service</h1>
                <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block font-bold dark:text-gray-400">Service Name</label>
                        <input type="text" name="name" id="name" placeholder="Service Name" className="w-full px-4 py-3 rounded-md bg-sky-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block font-bold dark:text-gray-400 ">Service Photo Url</label>
                        <input type="text" name="photourl" id="photourl" placeholder="Service Photo Url" className="w-full px-4 py-3 rounded-md bg-sky-200 bg-sky-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block font-bold dark:text-gray-400">Service Price</label>
                        <input type="text" name="price" id="price" placeholder="Service Price" className="w-full px-4 py-3 rounded-md bg-sky-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="text" className="block font-bold dark:text-gray-400">Service Details</label>
                        <input type="text" name="details" id="details" placeholder="Service Details" className="w-full h-20 px-4 py-3 rounded-md bg-sky-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <button className="block w-full  p-3 text-center rounded-sm dark:text-red-900 bg-violet-400 hover:bg-violet-700">Add Service</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
            </div>
        </div>
    );
};

export default AddPhotoService;