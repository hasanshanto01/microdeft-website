import React from 'react';

const FilterBar = () => {

    const handleLowToLHigh = () => {
        alert('hi')
        fetch('https://fakestoreapi.com/products?sort=asc')
            .then(res => res.json())
            .then(json => console.log(json))


    }

    const handleHighToLow = () => {

        fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res => res.json())
            .then(json => console.log(json))

    }

    return (
        <div className='grid grid-cols-2 gap-2'>
            <div className='flex'>
                <h2 className='font-bold'>Product <br /> List</h2>
                <input type="text" placeholder="Filter products..." className="input input-bordered w-full" />
            </div>
            <select className="select select-bordered w-full max-w-xs">

                <option>Nothing</option>
                <option onChange={handleLowToLHigh}>Low to High</option>
                <option onChange={handleHighToLow}>High to Low</option>
            </select>
        </div>
    );
};

export default FilterBar;