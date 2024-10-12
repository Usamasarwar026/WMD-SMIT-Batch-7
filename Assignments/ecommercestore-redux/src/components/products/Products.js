import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, filterProducts } from '../../store/slices/productSlices'; 
import Productcard from '../card/Productcard';
import Skeleton from 'react-loading-skeleton';
// import Header from '../header/Header';

const Products = () => {
    const dispatch = useDispatch();

    const { filteredProducts, loading, error, products } = useSelector(state => state.product);

    useEffect(() => {
        if(products.length === 0){

        dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <Button variant="outline-dark" className='me-2' onClick={() => dispatch(filterProducts(''))}>All</Button>
                    <Button variant="outline-dark" className='me-2' onClick={() => dispatch(filterProducts("men's clothing"))}>Men's Clothing</Button>
                    <Button variant="outline-dark" className='me-2' onClick={() => dispatch(filterProducts("women's clothing"))}>Women's Clothing</Button>
                    <Button variant="outline-dark" className='me-2' onClick={() => dispatch(filterProducts('jewelery'))}>Jewelery</Button>
                    <Button variant="outline-dark" className='me-2' onClick={() => dispatch(filterProducts('electronics'))}>Electronics</Button>
                </div>

                {filteredProducts.map(product => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <Productcard product={product} />
                    </div>
                ))}
            </>
        );
    };

    return (
        <div>
            {/* <Header/> */}
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Latest Products</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {loading ? <Loading /> : <ShowProduct />}
                    {error && <p>Error fetching products: {error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Products;
