import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
       <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
        <SubHeading  title="Chef’s Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
              <img src={images.quote} alt="quote" />
              <p className="p__opensans">We present to you, world renowned chef and head chef here at dear tokyo Kevin Luo.</p>
          </div>
          <p className="p__opensans">Kevin Luo brings nothing but the best to any kitchen he finds himself in and we are all very excited and honored to have him on board. Having been born & raised to two chefs, it seems like becoming one of the greatest chefs all of time was guaranteed for kevin luo but we promise you he has more than earned his status in the culinary world and his dishes speak for him.</p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Head Chef</p>
          <img src={images.sign} alt="sign" />
        </div>

    </div>
  </div>
);

export default Chef;
