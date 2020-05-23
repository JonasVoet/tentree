import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './cover.scss';


 const Cover = () => {
    return (
        
        <section className="cover-container" role="banner">
        <div className="content-img"></div>

        <div className="overlay"></div>

        <div className="text-section">

            <div className="container text-container">

            <h1>Summer Has Arrived</h1>
            <p>Let us bring summer to you. 
                Shop our new Summer Collection and get outside- we'll see you there, from a distance</p>

                <div className="btn-flex">
                    <div className="flex-item one">
                        <NavLink className="btn" to="/women">SHOP WOMEN'S</NavLink>
                    </div>

                    <div className="flex-item two">
                        <NavLink className="btn" to="/women">SHOP MENS'S</NavLink>
                    </div>
                </div>





            </div>

        </div>


            {/* <div className="title">
                
                <p>Let us bring summer to you. Shop our new Summer Collection and get</p>
                <p>outside- we'll see you there, from a distance</p>
            </div>

            <div className="buttons">
                <button className="btn1">SHOP WOMEN'S</button>
                <button className="btn2">SHOP MEN'S</button>
            </div> */}
            
        

        </section>
    )
}

export default withRouter(Cover);
