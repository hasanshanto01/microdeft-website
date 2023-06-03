import React from 'react';

const AddProduct = () => {

    const handleAddProduct = () => {

    }

    return (
        <div>
            <h2>Add New Product</h2>
            <div className="form-control w-4/5">
                <div>
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-1/2" />
                </div>
            </div>
            <button className="btn btn-primary mt-5 w-4/5">Add</button>
        </div>
    );
};

export default AddProduct;