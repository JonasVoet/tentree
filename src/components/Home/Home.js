import React from 'react';
import Cover from '../Cover/Cover';
import Tree from '../Tree-Cover/Tree';
import ShopCover from '../Shop-cover/ShopCover';
import CategoriesCover from '../CategoriesCover/CategoriesCover';
import Products from '../Products/Products';
import Shopmat from '../ShopMat/Shopmat';


 const Home = () => {
    return (
        <div className="wrapper">
            <Cover/>
            <Tree/>
            <ShopCover />
            <CategoriesCover />
            <Products />
            <Shopmat />
            
            
            
        </div>
    )
}

export default Home;
