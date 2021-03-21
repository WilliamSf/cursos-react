import React from 'react';
import './Card.css'

export default (props) => {


    const cardStyle = { 
        backgroundColor: `#F${String(parseInt(Math.random() * 9))}${String(parseInt(Math.random() * 9))}`,
    };

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.title}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};