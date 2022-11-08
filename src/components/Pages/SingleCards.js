import React from 'react';

const SingleCards = ({ data }) => {
    const { name, price, details, img, rating } = data
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default SingleCards;