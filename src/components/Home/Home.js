import React from 'react';
import Cover from '../Cover/Cover';
import Tree from '../Tree-Cover/Tree';
import ShopCover from '../Shop-cover/ShopCover';
import CategoriesCover from '../CategoriesCover/CategoriesCover';
import Products from '../Products/Products';


 const Home = () => {
    return (
        <div className="wrapper">
            <Cover/>
            <Tree/>
            <ShopCover />
            <CategoriesCover />
            <Products />
            
            
            
        </div>
    )
}

export default Home;
