import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export const CartIcon = () => {
    return (
        <div className="nav">
            <Link to="/cart"><ShoppingCart size={32}/></Link>
        </div>
    )
}; 