import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { CartContext } from '../CartContext';

const Slider = () => {
    
   const {state:{slides}}=useContext(CartContext)
    return (
        <>
            <Carousel>
                {slides.map((item) => (
                    <Carousel.Item>
                        <img   style = {{width:"100%",height:"400px"}} src={item} alt="Los Angeles" />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default Slider;