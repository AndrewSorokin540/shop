import img1 from '../img/pizza/1.png';
import img2 from '../img/pizza/2.png';
import img3 from '../img/pizza/3.png';
import img4 from '../img/pizza/4.png';
import img5 from '../img/pizza/5.png';
import img6 from '../img/pizza/6.png';
import img7 from '../img/pizza/7.png';
import img8 from '../img/pizza/8.png';
import img9 from '../img/pizza/9.png';
import img10 from '../img/pizza/10.png';
import img11 from '../img/pizza/11.png';
import img12 from '../img/pizza/12.png';
import img13 from '../img/pizza/13.png';
import img14 from '../img/pizza/14.png';
import img15 from '../img/pizza/15.png';

import imgCola from '../img/drinks/cola.png';
import imgFanta from '../img/drinks/fanta.png';
import imgSprite from '../img/drinks/sprite.png';

export default class DataService {

    pizza = [
        {
            id: 1,
            title: 'Фирменная',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img1,
            ingredientsInRus: 'Бекон, сервелат, корнишоны, маслины, лук фри, горчица дижонская, сыр Моцарелла, соус томатный'
        },
        {
            id: 2,
            title: 'Барбекю',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img2,
            ingredientsInRus: 'Филе цыпленка, ветчина, бекон, шампиньоны, сыр Моцарелла, соус BBQ'
        },
        {
            id: 3,
            title: 'Карбонара',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img3,
            ingredientsInRus: 'Бекон, томаты, сыры Пармезан и Моцарелла, соус чесночный'
        },
        {
            id: 4,
            title: 'Охотничья',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img4,
            ingredientsInRus: 'Колбаски Охотничьи, бекон, опята и лук маринованные, сыр Моцарелла, соус томатный'
        },
        {
            id: 5,
            title: 'Пепперони',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img5,
            ingredientsInRus: 'Пепперони, сыр Моцарелла, соус томатный'
        },
        {
            id: 6,
            title: 'Пепперони с двойным сыром',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img6,
            ingredientsInRus: 'Пепперони, сыр Моцарелла, соус томатный'
        },
        {
            id: 7,
            title: '6 сыров',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img7,
            ingredientsInRus: 'Пармезан, Дор-блю, Гауда, Чеддер оранжевый, творожный, Моцарелла'
        },
        {
            id: 8,
            title: 'Острая',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img8,
            ingredientsInRus: 'Филе цыпленка, перец халапеньо, сыр Моцарелла, маринованный лук, лечо, томатный соус'
        },
        {
            id: 9,
            title: 'Чикен рэнч',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img9,
            ingredientsInRus: 'Филе цыпленка, томаты, сыр Моцарелла, соус Ранч'
        },
        {
            id: 10,
            title: 'Мясная',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img10,
            ingredientsInRus: 'Филе цыпленка, бекон, сервелат, ветчина, колбаски Охотничьи, томаты, сыр Моцарелла , соус томатный'
        },
        {
            id: 11,
            title: 'С ветчиной и грибами',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img11,
            ingredientsInRus: 'Ветчина, шампиньоны, сыр Моцарелла, сыр Чеддер оранжевый, соус чесночный'
        },
        {
            id: 12,
            title: 'Гавайская',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img12,
            ingredientsInRus: 'Филе цыпленка, ветчина, ананас, сыр Моцарелла, соус розовый'
        },
        {
            id: 13,
            title: 'Барбекю микс',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img13,
            ingredientsInRus: 'Колбаски охотничьи, бекон, ветчина, корнишоны, маслины, сыр Моцарелла, лук маринованный, соусы чили, томатный и BBQ'
        },
        {
            id: 14,
            title: 'Грибная',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img14,
            ingredientsInRus: 'Ветчина, сервелат, шампиньоны, сыр Моцарелла, соус Ранч, итальянские травы'
        },
        {
            id: 15,
            title: 'Вегетарианская',
            details: {
                sm: {
                    price: 330,
                    weight: '360 гр.'
                },
                md: {
                    price: 420,
                    weight: '470 гр.'
                },
                lg: {
                    price: 650,
                    weight: '720 гр.'
                }
            },
            coverImage: img15,
            ingredientsInRus: 'Сыр моцарелла, сыр Творожный, томаты, маслины, лечо, лук маринованный, соусы ранч, чесночный, масло острое'
        }
    ]

    drinks = [
        {
            id: 17,
            title: 'Coca-Cola',
            details: {
                sm: {
                    price: 80,
                    weight: '0.5 л'
                },
                md: {
                    price: 100,
                    weight: '1 л'
                },
                lg: {
                    price: 120,
                    weight: '1 л'
                }
            },
            coverImage: imgCola
        },
        {
            id: 18,
            title: 'Fanta',
            details: {
                sm: {
                    price: 80,
                    weight: '0.5 л'
                },
                md: {
                    price: 100,
                    weight: '1 л'
                },
                lg: {
                    price: 120,
                    weight: '1 л'
                }
            },
            coverImage: imgFanta
        },
        {
            id: 19,
            title: 'Sprite',
            details: {
                sm: {
                    price: '0.5 л',
                    weight: 0.5
                },
                md: {
                    price: 100,
                    weight: '1 л'
                },
                lg: {
                    price: 120,
                    weight: '1 л'
                }
            },
            coverImage: imgSprite
        }
    ]

    getPizza = () => {
        return new Promise((resolve) => {
            resolve(this.pizza)
        })
    }

    getDrinks = () => {
        return new Promise((resolve) => {
            resolve(this.drinks)
        })
    }
}