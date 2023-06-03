import React from 'react';

const FilterBar = () => {
    return (
        <div>
            <h2 className='font-bold'>Product <br /> List</h2>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Who shot first?</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
        </div>
    );
};

export default FilterBar;