import breakfast from '../AppPictures/breakfast.png';
import dietary from '../AppPictures/dietary.png';
import ndinner from '../AppPictures/ndinner.png';
import bakery from '../AppPictures/bakery.png';
import dinner from '../AppPictures/dinner.png';
import dessert from '../AppPictures/dessert.png';


let inintialState = {
    menu: [
        { image: breakfast, name: 'Завтрак' },
        { image: dietary, name: 'Диетический' },
        { image: ndinner, name: 'Ужин' },
        { image: bakery, name: 'Выпечка' },
        { image: dinner, name: 'Обед' },
        { image: dessert, name: 'Десерты' },
    ],
    popularMenu: [
        { image: breakfast, name: 'Блюдо из БД', description: 'Описание' },
        { image: breakfast, name: 'Блюдо из ЧБД', description: 'Описание' },
        { image: breakfast, name: 'Блюдо из БД', description: 'Описание' },
    ],
}

let MainReducer = (state = inintialState, action) => {
    return state;
}
export default MainReducer;
