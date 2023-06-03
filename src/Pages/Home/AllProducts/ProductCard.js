import React from 'react';

const ProductCard = ({ product }) => {

    const { category, image, price, title } = product;

    return (
        <div className="card w-full bg-base-100 shadow-xl flex-row items-center">
            <figure className='w-1/3'><img src={image} alt="" /></figure>
            <div className="card-body w-2/3">
                <div className='flex gap-2'>
                    <button className="btn btn-sm btn-success">Edit</button>
                    <button className="btn btn-sm btn-error">Delete</button>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className='text-primary'>BDT TK {price}</p>
                <p>{category}</p>

            </div>
        </div>
    );
};

export default ProductCard;