import React, { useEffect, useState } from "react";

const Products = () => {

    const [product, setProduct] = useState([])

    useEffect(()=>{
        const getProducts = () => {
            fetch("http://127.0.0.1:8000/api/products")
            .then(res=>{
                return res.json()
            })
            .then(response=>{
                console.log(response.products)
                setProduct(response.products)
            })
            .catch(error=>{
                console.log(error)
            })

        }
        getProducts();

    },[]);

    return (
        <>
            <div className="container container-ocerflow">
                <div className="row">
                    <div className="col-12">
                        <h5>Products</h5>
                        <p className="text-danger"></p>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Image</th>
                                        <th scope="col" width="200">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((pdata, index)=>{
                                            <tr key={index}>
                                                <td>{index +1}</td>
                                                <td>{pdata.name}</td>
                                                <td>{pdata.description}</td>
                                                <td>{pdata.image}</td>
                                                <td>
                                                    <button>Edit</button>
                                                    <button>Delete</button>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>

                    </div>
                </div>

            </div>

        </>
    )

}

export default Products;