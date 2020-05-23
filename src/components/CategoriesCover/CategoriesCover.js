import React, { useEffect, useState, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';
import './categories.scss';


 const CategoriesCover = () => {

    
  const [categories, setCategories] = useState({});

  useEffect(() => {
      axios.get('http://localhost:3000/categories')
        .then(res => {
            // console.log(res)
            setCategories(res.data);
        });
  }, []);

  const categoryList = categories.length ? (
      categories.map(category => {
          return (
              <Fragment>
                  <div className="grid__item one-whole md-one-third lg-one-third">
                        <NavLink className="category__link" to="/collections/mens">

                            <div className="category__block">
                                <span id="img" className="category__image">

                                </span>
                                <h3 className="category__title">{category.categoryName}</h3>
                            </div>
                           
                        </NavLink>
                  
                        </div>
              
              </Fragment>
          )
      })
  ) : (
      <div>No categories to show</div>
  )

    return (
        <div className="cta-section category-grid">
            <div className="category-grid__background"></div>

            <div className="category-grid__foreground">
                <div className="br-container container-1200 cf">
                    <h2>Shop by Category</h2>
                    <p>Made for everyday living. We have something for everyone.</p>
                    <div className="grid justify--center">
                        

                       {categoryList}

                       
                    </div>
                </div>
           
            </div>
        </div>
    )
}

export default withRouter(CategoriesCover);
