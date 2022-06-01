import React from 'react';

const OrderItem = ({ item, deleteOrder}) => {
    const { _id, name, per_price, quantity } = item;
    
    return (
        <tr>
            <td></td>
            <td> {name} </td>
            <td> {per_price} </td>
            <td> {quantity} </td>
            <td className="deleteBtn">
                <button onClick={() => deleteOrder(_id)}> <img src='https://i.ibb.co/d22XH2y/icons8-recycle-bin-34.png' alt="" /></button>
            </td>
        </tr>
    );
};

export default OrderItem;