import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Experience japanese cusine like never before. Enjoy the freshness of our great food along with our live music that will make your dinner all the more memorable. </p>
        <button type="button" className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Established in 1960, dear tokyo was created in order to bring the mouth watering flavors of japan to the United States and elsewhere. At dear tokyo we have always believed in and always will believe in living a life full of happiness, great health, great food, and creating memories with family and friends. </p>
        <button type="button" className="custom__button">Know More</button>
        </div>
    </div>
  </div>
);

export default AboutUs;
