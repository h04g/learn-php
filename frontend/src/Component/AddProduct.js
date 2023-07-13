import React from "react";

const AddProduct = () => {
    return (
        <>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-4" >
                        <h5 className="mb-4">Add Product</h5>
                        <form>
                            <div className="mb-3 row">
                                <label className="col-sm-3">Product Title</label>
                                <div className="col-sm-9">
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3">Product Description</label>
                                <div className="col-sm-9">
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3">Product Image</label>
                                <div className="col-sm-9">
                                    <input className="form-control" type="file" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3"></label>
                                <div className="col-sm-9">
                                    <button className="btn btn-success" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct;