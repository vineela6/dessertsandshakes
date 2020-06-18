import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import Counter from './counter'
import TotalAmount from './totalAmount'
import { Link } from 'react-router-dom'
import EmptyCart from './emptyCart'

const Cart = () => {
    const {
        state: { cart },
        removeProduct
    } = useContext(CartContext);
    return (
        <>
            <div className="row">
                <div class="col-lg-7 col-md-12 col-sm-12 mt-4">
                    <div className=" container " >
                        {(cart.length == 0) ? <EmptyCart /> : (
                            <>
                                {cart.map(({ name, id, image, price, weight, quantity }, index) => (
                                    <div class="card mb-2 mt-2" style={{
                                        height: '200px',
                                        width: '700px'
                                    }} >
                                        <div class="row no-gutters">
                                            <div >
                                                <img class="img-fluid"  src={image}  height="200px" width="200px"alt="..." />
                                            </div>
                                            <div class=" col-lg-6  col-sm-12">
                                                <div class="card-body">
                                                    <h5 class="card-title">{name}</h5>
                                                    <p class="card-text"><small class="text-muted"><b>MRP : ${price}</b></small></p>
                                                    <div class="col-lg-6 col-sm-12"><div className="d-flex justify-content-between mt-5 ">
                                                        <Counter
                                                            quantity={quantity}
                                                            index={index}>
                                                        </Counter>
                                                        <span class="badge badge-success pt-2 mt-3" style={{ height: '30px' }} >Qty : {quantity}</span>
                                                        <button onClick={() => removeProduct(index)}
                                                            className="btn  btn-danger mt-2" style={{ height: 'fit-content' }}>REMOVE</button></div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </>
                        )}
                    </div>
                    {cart.length==0?(""):(
                    <Link to="/menu">
                        <button className="btn btn-dark mt-3">ADD MORE</button></Link>)}
                </div>
                <div className="col-lg-5 border mt-4  ml-auto bg-light jumbotron" style={{ height: 'fit-content' }}>
                    <TotalAmount></TotalAmount>
                </div>
            </div>
        </>
    )
}
export default Cart
