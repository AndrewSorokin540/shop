export default class DataService {

    data = [
        {
            id: 1,
            title: 'React и Redux. Функциональная веб-разработка',
            author: 'Алекс Бэнкс',
            price: 550,
            coverImage: 'https://cv9.litres.ru/pub/c/pdf-kniga/cover_415/29415793-a-benks-piter-react-i-redux-funkcionalnaya-veb-razrabotka-29415793.jpg'
        },
        {
            id: 2,
            title: 'Изучаем Node. Переходим на сторону сервера',
            author: 'Шелли Пауэрс',
            price: 529,
            coverImage: 'https://cv5.litres.ru/pub/c/pdf-kniga/cover_330/6376456-shelli-pauers-izuchaem-node-js.jpg'
        },
        {
            id: 3,
            title: 'Git для профессионального программиста',
            author: 'Скотт Чакон',
            price: 907,
            coverImage: 'https://cv0.litres.ru/pub/c/pdf-kniga/cover_330/16901909-b-shtraub-git-dlya-professionalnogo-programmista-16901909.jpg'
        },
        {
            id: 4,
            title: 'HTML и CSS. Разработка и дизайн веб-сайтов',
            author: 'Джон Дакетт',
            price: 590,
            coverImage: 'https://cv9.litres.ru/pub/c/pdf-kniga/cover_330/38272898-dzhon-dakett-html-i-css-razrabotka-i-dizayn-veb-saytov-38272898.jpg'
        },
        {
            id: 5,
            title: 'Python. Программирование для начинающих',
            author: 'Майк МакГрат',
            price: 199,
            coverImage: 'https://cv3.litres.ru/pub/c/pdf-kniga/cover_330/14108932-mayk-makgrat-python-programmirovanie-dlya-nachinauschih-14108932.jpg'
        },
        {
            id: 6,
            title: 'Laravel. Быстрая разработка современных динамических Web-сайтов на PHP, MySQL, HTML и CSS',
            author: 'Владимир Дронов',
            price: 712,
            coverImage: 'https://cv2.litres.ru/pub/c/pdf-kniga/cover_330/39286527-vladimir-dronov-laravel-bystraya-razrabotka-sovremennyh-dinamiche-39286527.jpg'
        },
        {
            id: 7,
            title: 'Angular для профессионалов',
            author: 'Адам Фримен',
            price: 549,
            coverImage: 'https://cv7.litres.ru/pub/c/pdf-kniga/cover_330/29414673-adam-frimen-angular-dlya-professionalov-29414673.jpg'
        },
        {
            id: 8,
            title: 'ECMAScript 6 для разработчиков',
            author: 'Николас Закас',
            price: 765,
            coverImage: 'https://cv3.litres.ru/pub/c/pdf-kniga/cover_330/24426234-nikolas-zakas-ecmascript-6-dlya-razrabotchikov-24426234.jpg'
        },
        {
            id: 9,
            title: 'Bootstrap в примерах',
            author: 'Сильвио Морето',
            price: 460,
            coverImage: 'https://cv2.litres.ru/pub/c/pdf-kniga/cover_330/22780728-silvio-moreto-bootstrap-v-primerah-22780728.jpg'
        }
    ];
    
    getData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 1000)
        })
    }
}