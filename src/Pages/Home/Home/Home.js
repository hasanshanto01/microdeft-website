import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import FilterBar from '../FilterBar/FilterBar';

const Home = () => {
    return (
        <div>
            <FilterBar></FilterBar>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;