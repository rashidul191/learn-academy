import React from 'react';
import fakeData from '../fakeData/fakeData';
import { useState } from 'react';
import './Coures.css' ;
import CourseVideos from '../CourseVideos/CourseVideos';
import Cart from '../Cart/Cart';


const Coures = () => {
    
   console.log(fakeData);
   const allCoures = fakeData.slice (0,20);
   const [coures, setCoures]= useState (allCoures);
   const [cart, setCart]= useState ([]);

   const handleAddProduct = (product) => {
        console.log("product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
   }
    return (
        <div className="body-coures-container">
           <div className="coures-container">
                {
                    coures.map( course => 
                        <CourseVideos 
                            handleAddProduct={handleAddProduct}
                            course ={course}
                        ></CourseVideos>)
                }
           </div>
           <div className="cart-container">
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Coures;