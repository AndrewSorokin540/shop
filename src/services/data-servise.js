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
import img16 from '../img/pizza/16.png';

import imgCola from '../img/drinks/cola.png';
import imgFanta from '../img/drinks/fanta.png';
import imgSprite from '../img/drinks/sprite.png';

export default class DataService {

    pizza = [
        {
            id: 1,
            title: 'Фирменная',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img1,
            ingredientsInRus: 'Бекон, сервелат, корнишоны, маслины, лук фри, горчица дижонская, сыр Моцарелла, соус томатный'
        },
        {
            id: 2,
            title: 'Барбекю',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img2,
            ingredientsInRus: 'Филе цыпленка, ветчина, бекон, шампиньоны, сыр Моцарелла, соус BBQ'
        },
        {
            id: 3,
            title: 'Карбонара',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img3,
            ingredientsInRus: 'Бекон, томаты, сыры Пармезан и Моцарелла, соус чесночный'
        },
        {
            id: 4,
            title: 'Охотничья',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img4,
            ingredientsInRus: 'Колбаски Охотничьи, бекон, опята и лук маринованные, сыр Моцарелла, соус томатный'
        },
        {
            id: 5,
            title: 'Пепперони',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img5,
            ingredientsInRus: 'Пепперони, сыр Моцарелла, соус томатный'
        },
        {
            id: 6,
            title: 'Пепперони с двойным сыром',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img6,
            ingredientsInRus: 'Пепперони, сыр Моцарелла, соус томатный'
        },
        {
            id: 7,
            title: '6 сыров',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img7,
            ingredientsInRus: 'Пармезан, Дор-блю, Гауда, Чеддер оранжевый, творожный, Моцарелла'
        },
        {
            id: 8,
            title: 'Острая',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img8,
            ingredientsInRus: 'Филе цыпленка, перец халапеньо, сыр Моцарелла, маринованный лук, лечо, томатный соус'
        },
        {
            id: 9,
            title: 'Чикен рэнч',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img9,
            ingredientsInRus: 'Филе цыпленка, томаты, сыр Моцарелла, соус Ранч'
        },
        {
            id: 10,
            title: 'Мясная',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img10,
            ingredientsInRus: 'Филе цыпленка, бекон, сервелат, ветчина, колбаски Охотничьи, томаты, сыр Моцарелла , соус томатный'
        },
        {
            id: 11,
            title: 'С ветчиной и грибами',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img11,
            ingredientsInRus: 'Ветчина, шампиньоны, сыр Моцарелла, сыр Чеддер оранжевый, соус чесночный'
        },
        {
            id: 12,
            title: 'Гавайская',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img12,
            ingredientsInRus: 'Филе цыпленка, ветчина, ананас, сыр Моцарелла, соус розовый'
        },
        {
            id: 13,
            title: 'Барбекю микс',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img13,
            ingredientsInRus: 'Колбаски охотничьи, бекон, ветчина, корнишоны, маслины, сыр Моцарелла, лук маринованный, соусы чили, томатный и BBQ'
        },
        {
            id: 14,
            title: 'Грибная',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img14,
            ingredientsInRus: 'Ветчина, сервелат, шампиньоны, сыр Моцарелла, соус Ранч, итальянские травы'
        },
        {
            id: 15,
            title: 'Вегетарианская',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img15,
            ingredientsInRus: 'Сыр моцарелла, сыр Творожный, томаты, маслины, лечо, лук маринованный, соусы ранч, чесночный, масло острое'
        },
        {
            id: 16,
            title: 'Nutella',
            price: {
                s: 280,
                m: 360,
                l: 480
            },
            coverImage: img16,
            ingredientsInRus: 'Сыр творожный, сметана, персик, зефир Маршмеллоу, nutella'
        }
    ]
    drinks = [
        {
            id: 1,
            title: 'Coca-Cola',
            price: {
                s: 80
            },
            coverImage: imgCola
        },
        {
            id: 1,
            title: 'Fanta',
            price: {
                s: 80
            },
            coverImage: imgFanta
        },
        {
            id: 1,
            title: 'Sprite',
            price: {
                s: 80
            },
            coverImage: imgSprite
        }
    ]

    getPizza() {
        return new Promise((resolve) => {
            resolve(this.pizza)
        })
    }

    getDrinks() {
        return new Promise((resolve) => {
            resolve(this.drinks)
        })
    }
}