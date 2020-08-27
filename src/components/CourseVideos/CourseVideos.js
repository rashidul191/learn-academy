import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CourseVideos.css';

const CourseVideos = (props) => {
   
     const { name, img, price, createdBy } = props.course ;
    return (
        <div className="coures-item">
            <div>
                <img src={img} alt=""/>
                <h3>{name}</h3>
                <p><small>Created By : {createdBy}</small></p>
                <h3>$ {price}</h3>
                <p><small>Public review : 4.7  ⭐⭐⭐⭐⭐</small></p>
                <button 
                    className="video-btn"
                    onClick={()=> props.handleAddProduct(props.course)}
                    >
                     <FontAwesomeIcon icon={faShoppingCart}/> Enroll Video
                </button>
            </div>
            
        </div>
    );
};

export default CourseVideos;