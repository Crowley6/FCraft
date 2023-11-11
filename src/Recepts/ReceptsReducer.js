import blin from '../AppPictures/blin.png';

let initialState = {
    ReceptsData: [
        {
            id: 1,
            image: blin,
            kitchenKategory: 'Выпечка и десерты',
            kitchenKategory2: 'Авторская кухня',
            kitchenKategory3: '',
            name: 'Блины с бананом',
            author: 'Гаджимагомед М.',
            dataSet: '01.10.23',
            countIngredients: 5,
            countPortions: 6,
            countTime: `15 минут`,
            subscribeRecept: 1,
            countSubscribes: 6,
            countLikes: 2,
            countDislikes: 1,
            ingredientsName: {
                milkName: 'Молоко',
                cocckEggsName: 'Куриное яйцо',
                wheatFlourName: 'Пшеничная мука',
                sugarName: 'Сахар',
                bananaName: 'Бананы',
            },
            ingredients: {
                milk: 1,
                cocckEggs: 2,
                wheatFlour: 600,
                sugar: 3,
                banana: 4,
            },
            instructions: [
                'фывайцукацпыавпкуичвцумкцгинемгесзщкусирцпзуа',
                'фывайцукацпыавпкуичвцумкцгинемгесзщкусирцпзуа',
            ]
        },
        {
            id: 2,
            image: blin,
            kitchenKategory: 'Выпечка и десерты',
            kitchenKategory2: 'Европейская кухня',
            kitchenKategory3: '',
            name: 'Блины с бананом и шоколадом',
            author: 'Марина Х.',
            dataSet: '16.12.22',
            countIngredients: 9,
            countPortions: 2,
            countTime: `25 минут`,
            subscribeRecept: 1,
            countSubscribes: 4,
            countLikes: 5,
            countDislikes: 2,
            ingredientsName: {
                milkName: 'Молоко',
                cocckEggsName: 'Куриное яйцо',
                wheatFlourName: 'Пшеничная мука',
                sugarName: 'Сахар',
                bananaName: 'Бананы',
            },
            ingredients: {
                milk: '1 л',
                cocckEggs: '2 шт',
                wheatFlour: '600 гр',
                sugar: '3 ст.л',
                banana: '4 шт',
            }
        },
        {
            id: 3,
            image: blin,
            kitchenKategory: 'Выпечка и десерты',
            kitchenKategory2: 'Авторская кухня',
            kitchenKategory3: '',
            name: 'Банановые блинчики с сиропом',
            author: 'Пари С.',
            dataSet: '21.04.23',
            countIngredients: 10,
            countPortions: 2,
            countTime: `35 минут`,
            subscribeRecept: 0,
            countSubscribes: 10,
            countLikes: 12,
            countDislikes: 4,
            ingredientsName: {
                milkName: 'Молоко',
                cocckEggsName: 'Куриное яйцо',
                wheatFlourName: 'Пшеничная мука',
                sugarName: 'Сахар',
                bananaName: 'Бананы',
            },
            ingredients: {
                milk: '1 л',
                cocckEggs: '2 шт',
                wheatFlour: '600 гр',
                sugar: '3 ст.л',
                banana: '4 шт',
            }
        },
        {
            id: 4,
            image: blin,
            kitchenKategory: 'Выпечка и десерты',
            kitchenKategory2: 'Авторская кухня',
            kitchenKategory3: '',
            name: 'Овсяные блины с бананом',
            author: 'Дмитрий М.',
            dataSet: '41.11.23',
            countIngredients: 8,
            countPortions: 1,
            countTime: `10 минут`,
            subscribeRecept: 0,
            countSubscribes: 6,
            countLikes: 2,
            countDislikes: 1,
            ingredientsName: {
                milkName: 'Молоко',
                cocckEggsName: 'Куриное яйцо',
                wheatFlourName: 'Пшеничная мука',
                sugarName: 'Сахар',
                bananaName: 'Бананы',
            },
            ingredients: {
                milk: '1 л',
                cocckEggs: '2 шт',
                wheatFlour: '600 гр',
                sugar: '3 ст.л',
                banana: '4 шт',
            }
        }
    ],
}

const ReceptsReducer = (state = initialState, action) => {
    return state;
}

export default ReceptsReducer;