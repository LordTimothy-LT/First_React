import React from "react";
import { useLocation } from "react-router-dom";
import Card from '../../../reuseable components/Card';


function ContactUs(){
    const location = useLocation().state

    const {userId, id, title, body } = location

    return (
        <div
            style={{
                backgroundColor: 'blue',
                color: 'yellow',
                fontSize: '30px',
                fontWeight: '700'
            }}
        >
            Products
            <div>
                <Card
                userId={userId}
                id={id}
                title={title}
                body={body}
                />
            </div>
        </div>
    )
}

export default Product;