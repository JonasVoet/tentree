import React, { useState, useEffect } from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import axios from 'axios';
import './products.scss';

const Products = () => {
    const [products, setProducts] = useState({});
    
  
      useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => {
                console.log(res);
                setProducts(res.data);
            });
    }, []);

    const productList = products.length ? (
        products.map(product => {

            return (
                
         <div className="product_inside">
         <div className="image-box petetest">
         <img src={`http://localhost:3000/${product.productImage}`} alt="product" className="lazyloaded" />
         </div>

    <h2 className="title">{product.title}</h2>
    <p className="price">£{product.price}</p>
     </div> 
     )
    })

) : (
    <div className="container">
            <div className="text-center">Loading Product...</div>
        </div>
)
           


    return (
        <section className="section featured-collections">

            <div className="br-container container-1440 cf">
                <h2>Shop New Summer Arrivals</h2>
                <p>Comfortable and sustainable styles for the best summer stay-cation</p>
            </div>
            <div id="tabMenu" className="offset-40">
                <ul className="tabs cf">
                    <li>
                        <NavLink id="active" to="/">WOMEN'S</NavLink>
                    </li>
                    <li>
                    <NavLink to="/">MEN'S</NavLink>
                    </li>
                </ul>

                <ul className="tabs-content">
                    <li id="collection1Content" className="active">
                        <div className="row">
                            <div className="product">
                            {productList}
                               
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>
    )
}

export default withRouter(Products);
