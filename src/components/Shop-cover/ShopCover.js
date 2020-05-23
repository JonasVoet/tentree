import React from 'react';
import './shopcover.scss';

 const ShopCover = () => {
    return (
        <section className="shopcover-section cta-section">
            
            <div className="cover-container-2 container-1200 offset-10 cf">
        
                <div className="grid gutter--extra-wide align--center fiftyfifty-img--left spacer--triple">

                    <div className="grid__item one-whole md-one-half">
                        <div className="image-container">
                            <img className="fiftyfifty-img" src="https://cdn.shopify.com/s/files/1/0269/9437/6781/files/tentree-earth-month-capsule-homepage-banner-2.progressive.jpg?v=1586945928" alt="women" />
                        </div>
                    </div>

                    <div className="grid__item one-whole md-one-half mobile-centered">
                        <div className="island index-mobile-none">
                            <h2>Limited Edition Earth Capsule</h2>
                            <p>Celebrate the 50th Anniversay of Earth Month with our limited edition Earth Capsule</p>
                            <p className="br-btn offset-20">SHOP NOW</p>
                        </div>
                    </div>

                </div>
            </div>

            
        </section>
    )
}

export default ShopCover;
