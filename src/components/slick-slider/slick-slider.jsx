import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = (settings, slides, title) => (
    <div className='m-b-3'>
        <h2>{title && title}:</h2>
        <Slider {...settings}>
            {slides}
        </Slider>
    </div>
)

export default SlickSlider;