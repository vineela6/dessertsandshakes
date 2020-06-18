import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'


const Menu = () => {
    const {
        state: { iceCreams, cart },
        additem,
        Item
    } = useContext(CartContext);
    return (
        <>
            <div className="container mt-4" style={{ border: '1px solid #151617' }}>
                <div className="row">
                    {iceCreams.map(({ name, id, image, price, weight, incart }, index) => (
                        <div className="col-lg-4 col-md-5 col-sm-12 mt-2 mb-3">
                            <div className="card w-100" style={{ height: '340px' }}>
                                <Link to="/menu/itemdetails"> <img src={image} onClick={() => Item(index)} height="200px" className="card-img-top " /></Link>
                                <div className="card-body">
                                    <Link to='/menu/itemdetails'><h5 className="card-title " onClick={() => Item(index)}>{name}</h5></Link>
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text ">{weight}</p>
                                        <p className="card-text "><span className="badge badge-success">MRP</span> : {price} <span>&#8377;</span></p>
                                    </div>
                                    <button className="btn btn-warning btn-sm" disabled={incart == "true" ? true : false} onClick={() => additem(index)} >Buy Now</button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Menu
