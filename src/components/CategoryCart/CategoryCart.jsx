import React from 'react';

const CategoryCart = ({tree}) => {

    const { name, price, image} = tree;
    return (
        <div className='w-full border-1 border-green-300 rounded-xl p-3 space-y-2'>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <img className='w-full h-44 object-cover' src={image} alt="image" />
        </div>
    );
};

export default CategoryCart;