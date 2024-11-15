import React, { useState, useEffect } from 'react';
import Product from '../Components/Product';
import CartProduct from '../Components/CartProduct';

const Products = () => {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className=" w-11/12 mx-auto">
          <h1 className='text-4xl text-center mt-[120px] mb-12 text-pink-600 font-semibold'>Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    products.map((p) => (
                        <Product key={p.id} product={p} /> 
                    ))
                }
            </div>
            {/* <Route path="/product/:id" element={<CartProduct />} /> */}
        </div>
    );
};

export default Products;
