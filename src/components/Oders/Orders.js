import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../Reviewitem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);



    // onclick function er moddhe useNavigate use kore ak link thake onno link e jete pari

    const navigate = useNavigate();

    // handleRemoveProduct function added on must uesState section 

    const handleRemoveProduct = product => {
        const rest = cart.filter(p => p.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem

                        //uinck id must added
                        key={product.id}

                        // product props akare pathai daoya hocce
                        product={product}

                        // handleRemoveProduct props akare pathai daoya hocce
                        handleRemoveProduct={handleRemoveProduct}

                    ></ReviewItem>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* use navigate  onclick function*/}
                    <button onClick={() => navigate('/inventory')}>Proceed CheckOut</button>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;