import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import FilterBar from '../FilterBar/FilterBar';
import AddProduct from '../AddProduct/AddProduct';

const Home = () => {
    return (
        <div className='flex gap-5'>
            <div className='w-3/5'>
                <FilterBar></FilterBar>
                <AllProducts></AllProducts>
            </div>
            <div className='w-2/5'>
                <AddProduct></AddProduct>
            </div>
        </div>
    );
};

export default Home;