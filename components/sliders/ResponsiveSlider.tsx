import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ResponsiveSlider: React.FC<any> = ({ children }) => {
  
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: false,
    responsive: [
      {
        breakpoint: 1023.98,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    <div className="slider-spacing-sm hidden-arrows">
      <Slider {...settings}>{children}</Slider>
    </div>
  );

};

export default ResponsiveSlider;
