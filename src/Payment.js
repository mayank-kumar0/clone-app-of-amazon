import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Payment() {
    const history = useNavigate();
    const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
        <div className='payment__container'>
        <h1>
            Checkout (
                <Link to='/checkout'>{basket?.length} items</Link>
                )
        </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>#136, Rk Path Nagar</p>
                    <p>Kankarbagh, Patna, 800020</p>
                </div>
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                      />
                    ))}
                </div>
            </div>
            <button onClick = {e => history('/order')}>Buy Now</button>
        </div>
    </div>
  )
}

export default Payment