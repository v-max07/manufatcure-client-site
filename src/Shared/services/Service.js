import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const{_id,per_price,picture,name,description,quantity} = props.service;
    const navigate = useNavigate()
    const orderNow = id =>{
        navigate(`/order/${id}`)
    }
    return (
        
            <div className='card-container border p-5'>
                   <img height="200px" className='text-center w-100' src={picture} alt="" />
                    <h2 className='text-center'>{name}</h2>
                    <p>{description.slice(0,90)}....</p>
                    <h4>Per price : {per_price}</h4>
                    {
                        quantity? <p>Available' : {quantity}</p>
                        :
                        <p className='fw-bold text-danger'>Product Not Available!</p>
                    }
                    {
                !quantity ? <button disabled style={{ backgroundColor: 'rgb(25 82 170 / 72%)'}} className='banner-button' onClick={() => orderNow(_id)}>Order now</button> 
                        :
                         <button className='banner-button' onClick={() => orderNow(_id)}>Order now</button>
                    }
                    
            </div>
        
    );
};

export default Service;