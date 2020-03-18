import React, { Component } from "react";
import Slider from "react-slick";
import './slider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_1 from '../../img/slides/1.jpeg';
import slide_2 from '../../img/slides/2.jpeg';
import slide_3 from '../../img/slides/3.jpeg';

const sliderData = [
    {
        imgSrc: slide_1,
        textTitle: 'День рождения!',
        textDescription: 'Купи пиццу в день рождения на 1000 рублей и получи в подарок столько пицц сколько тебе лет!!!'
    },
    {
        imgSrc: slide_2,
        textTitle: 'Сытый понедельник',
        textDescription: 'По понедельникам скидка на всю пиццу 50%!'
    },
    {
        imgSrc: slide_3,
        textTitle: 'На массе!',
        textDescription: 'Заказывай у нас пиццу 30 дней подряд и получи в подарок годовой абонемент в тренажерный зал!'
    }
]

export default class SimpleSlider extends Component {
    render() {
        const slides = sliderData.map(slide => {
            return (
                <div className='pizza-slide'>
                    <img className='pizza-slide__img' src={slide.imgSrc} alt="pizza slide" />
                    <div className='pizza-slide__text'>
                        <h2 className='pizza-slide__text-title'>{slide.textTitle}</h2>
                        <p className='pizza-slide__text-description'>{slide.textDescription}</p>
                    </div>
                </div>
            )
        })
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2>Акции:</h2>
                <Slider {...settings}>
                    {slides}
                </Slider>
            </div>
        );
    }
}