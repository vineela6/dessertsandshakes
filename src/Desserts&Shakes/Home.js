import React, { useContext }from 'react'
import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext'
import Slider from './Slider';
import "./LoginPage.css";

const Home = () => {
    const {
        sundaes,
        cones,scoops
    } = useContext(CartContext);
    return (
        <div className="py-4">
            <h3 style={{ fontWeight: '200px' }}>Melt into moments of bliss</h3>
                    <p className="pt-2"
                        style={{ textAlign: 'left', lineHeight: '35px', fontWeight: '500' }}>
                         Ice creams hailed with an urge to craft the finest flavours upbringing
                        rich and creamy texture for an indulging experience. From fairs,
                        festivals and parties to “hooray”,” yippee” and “yaay”, take a dose of
                        Iceberg ice creams and amplify the happiness.
                        It is all about creating sumptuous treats for everyone, every day and everywhere!</p>
                        
            <div className="row">
               <Slider/>
            </div>
            <br/>
            <div className="row ">
                <div className="col-lg-4 col-md-6 col-sm-11  pt-3 text-center" id="hov">
                    <img className="rounded-circle img-fluid" width="250"  height="250 " src="https://pinchofyum.com/wp-content/uploads/bakedminidonuts11.jpg" />
                    <Link to="/menu/sundaes"><h3 className="pt-3 font-weight-bold " onClick={()=>sundaes()}>Sundae</h3></Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-11  pt-3 text-center" id="hov">
                    <img className="rounded-circle img-fluid "  width="250"  height="250 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRm7S1bIEYqD4pncB9PgbVuoQxnIwGqLFDk0g&usqp=CAU" />
                    <Link to="/menu/cones"><h3 className="pt-3 font-weight-bold" onClick={()=>cones()}>shakes</h3></Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-11  pt-3 text-center" id="hov">
                    <img className="rounded-circle img-fluid"width="250"  height="250 "  src="https://cdn.shopify.com/s/files/1/0375/0867/7769/products/WhatsAppImage2020-06-16at17.07.23_1024x1024@2x.jpg?v=1592299447" />
                    <Link to="/menu/scoops"><h3 className="pt-3 font-weight-bold" onClick={()=>scoops()}>Scoops</h3></Link>
                </div>
            </div>
            <hr style={{ borderTop: '2px dashed black' }}></hr>
            <h1 className="text-center" style={{ fontFamily: 'cursive' }}>WHAT'S BEEN SAID</h1>
            <Reviews></Reviews>
        </div>
    )
}

export default Home
