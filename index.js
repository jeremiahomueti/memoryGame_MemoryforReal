const cardsArray = [

    {
        name: 'fries',
        img: 'images/fries.png'
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milk-shake',
        img: 'images/milk-shake.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    }

]

cardsArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const scoreDisplay = document.getElementById('score')

