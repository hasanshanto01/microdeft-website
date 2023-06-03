import React from 'react';

const FilterBar = () => {
    return (
        <div className='grid grid-cols-2 gap-2'>
            <div className='flex'>
                <h2 className='font-bold'>Product <br /> List</h2>
                <input type="text" placeholder="Filter products..." className="input input-bordered w-full" />
            </div>
            <select className="select select-bordered w-full max-w-xs">

                <option>Nothing</option>
                <option>Low to High</option>
                <option>High to Low</option>
            </select>
        </div>
    );
};

export default FilterBar;