import './Recepts.css';
import X from '../AppPictures/x.svg';
import blin from '../AppPictures/blin.png';
import { useState } from 'react';
import ImageBackForHeader from '../AppPictures/ImageBackForHeader.png';

const ReceptsIngredient = () => {
    return (
        <div className='AppMain-Recepts_IngredientsView_Object'>
            <img src={blin} alt="" />
            <div className='AppMain-Recepts_IngredientsView_ObjectData'>
                <div className='AppMain-Recepts_IngredientsView_ObjectDataHeader'>
                    <p>Выпечка и десерты</p>
                    <p>Авторская кухня</p>
                </div>
                <div className='AppMain-Recepts_IngredientsView_ObjectDataName'>Блины с бананом</div>
                <div className='AppMain-Recepts_IngredientsView_ObjectDataVendor'>Автор: Данные с БД</div>
                <div className='AppMain-Recepts_IngredientsView_ObjectDataInfo'>
                    <div className='AppMain-Recepts_IngredientsView_ObjectDataInfo_CountIngredients'>9 ингредиентов</div>
                    <div className='AppMain-Recepts_IngredientsView_ObjectDataInfo_CountPortions'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clip-path="url(#clip0_571_916)">
                                <path d="M15 1.25V8.75C14.9982 10.1903 14.4999 11.5859 13.5891 12.7016C12.6783 13.8173 11.4107 14.5849 10 14.875V28.75C10 29.0815 9.8683 29.3995 9.63388 29.6339C9.39946 29.8683 9.08152 30 8.75 30C8.41848 30 8.10054 29.8683 7.86612 29.6339C7.6317 29.3995 7.5 29.0815 7.5 28.75V14.875C6.08927 14.5849 4.82168 13.8173 3.9109 12.7016C3.00011 11.5859 2.50182 10.1903 2.5 8.75V1.25C2.5 0.918479 2.6317 0.600537 2.86612 0.366117C3.10054 0.131696 3.41848 0 3.75 0C4.08152 0 4.39946 0.131696 4.63388 0.366117C4.8683 0.600537 5 0.918479 5 1.25V8.75C5.0032 9.52283 5.2451 10.2758 5.69261 10.9059C6.14011 11.536 6.77136 12.0124 7.5 12.27V1.25C7.5 0.918479 7.6317 0.600537 7.86612 0.366117C8.10054 0.131696 8.41848 0 8.75 0C9.08152 0 9.39946 0.131696 9.63388 0.366117C9.8683 0.600537 10 0.918479 10 1.25V12.27C10.7286 12.0124 11.3599 11.536 11.8074 10.9059C12.2549 10.2758 12.4968 9.52283 12.5 8.75V1.25C12.5 0.918479 12.6317 0.600537 12.8661 0.366117C13.1005 0.131696 13.4185 0 13.75 0C14.0815 0 14.3995 0.131696 14.6339 0.366117C14.8683 0.600537 15 0.918479 15 1.25ZM27.5 12.5C27.4441 14.8756 26.8531 17.2079 25.771 19.3234C24.6889 21.4389 23.1435 23.2832 21.25 24.7188V28.75C21.25 29.0815 21.1183 29.3995 20.8839 29.6339C20.6495 29.8683 20.3315 30 20 30C19.6685 30 19.3505 29.8683 19.1161 29.6339C18.8817 29.3995 18.75 29.0815 18.75 28.75V2.5C18.7388 2.03033 18.8671 1.56788 19.1188 1.17116C19.3704 0.774439 19.7341 0.461264 20.1637 0.27125C20.6573 0.0704565 21.1987 0.0177877 21.7217 0.11968C22.2447 0.221573 22.7267 0.473613 23.1087 0.845C26.0079 4.02619 27.5792 8.19662 27.5 12.5ZM25 12.5C25.0355 8.84019 23.6974 5.3001 21.25 2.57875V21.3375C23.5926 18.9853 24.9361 15.8191 25 12.5Z" fill="#183851" />
                            </g>
                            <defs>
                                <clipPath id="clip0_571_916">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div>2 порций</div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clip-path="url(#clip0_571_920)">
                                <path d="M15 0C12.0333 0 9.13319 0.879735 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649929 12.0006 -0.290551 15.0166 0.288228 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3336C29.1203 20.8668 30 17.9667 30 15C29.9957 11.0231 28.414 7.21026 25.6019 4.39815C22.7897 1.58604 18.9769 0.00430135 15 0ZM15 27.5C12.5277 27.5 10.111 26.7669 8.05538 25.3934C5.99976 24.0199 4.39761 22.0676 3.45151 19.7835C2.50542 17.4995 2.25788 14.9861 2.74019 12.5614C3.22251 10.1366 4.41302 7.90932 6.16117 6.16117C7.90933 4.41301 10.1366 3.2225 12.5614 2.74018C14.9861 2.25787 17.4995 2.50541 19.7836 3.45151C22.0676 4.3976 24.0199 5.99976 25.3934 8.05537C26.7669 10.111 27.5 12.5277 27.5 15C27.4964 18.3141 26.1782 21.4914 23.8348 23.8348C21.4914 26.1782 18.3141 27.4964 15 27.5Z" fill="#183851" />
                                <path d="M15.0001 7.5C14.6685 7.5 14.3506 7.6317 14.1162 7.86612C13.8818 8.10054 13.7501 8.41848 13.7501 8.75V14.1563L9.53631 16.7963C9.25451 16.9723 9.05419 17.2531 8.97941 17.5768C8.90463 17.9005 8.96152 18.2407 9.13755 18.5225C9.31359 18.8043 9.59436 19.0046 9.9181 19.0794C10.2418 19.1542 10.582 19.0973 10.8638 18.9213L15.6638 15.9213C15.8452 15.8076 15.9943 15.6493 16.097 15.4615C16.1996 15.2738 16.2523 15.0628 16.2501 14.8488V8.75C16.2501 8.41848 16.1184 8.10054 15.8839 7.86612C15.6495 7.6317 15.3316 7.5 15.0001 7.5Z" fill="#183851" />
                            </g>
                            <defs>
                                <clipPath id="clip0_571_920">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div>25 минут</div>
                    </div>
                </div>
                <div className='AppMain-Recepts_IngredientsView_ObjectDataGrade'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                            <path d="M21.4684 27L11.9728 15.0375L2.51533 27L2.51516 3.35085C2.51516 2.46215 2.33696 1.42252 2.88999 0.794118C3.44303 0.165712 3.81828 0 4.60039 0L19.3452 0C20.1273 0 20.5025 0.165712 21.0555 0.794118C21.6086 1.42252 21.4684 2.46215 21.4684 3.35085V27ZM11.9728 12.7059L19.3452 21.4412V1.98529H4.60039V21.4412L11.9728 12.7059Z" fill="#9B5B95" />
                        </svg>
                        <div>Добавить в рецепты</div>
                    </div>
                    <div>
                        <div>4</div>
                        <div>5</div>
                        <div>2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const ShowIngredients = () => {
    return (
        <div className='AppMain-ReceptsIngredientsOut'>
            <div className='AppMain-ReceptsIngredientsIn'>
                <div className='AppMain-ReceptsIngredientsIn_Add'>
                    <h1>Включить ингредиенты</h1>
                    <div className='AppMain-ReceptsIngredientsIn_AddMenu'>
                        <div>Данные с сервера</div>
                        <button>+ Ингредиенты</button>
                    </div>
                </div>
                <div className='AppMain-ReceptsIngredientsIn_Remove'>
                    <h1>Исключить ингредиенты</h1>
                    <div className='AppMain-ReceptsIngredientsIn_RemoveMenu'>
                        <div>Данные с сервера</div>
                        <div></div>
                        <div></div>
                        <div>Данные с сервера</div>
                        <div>Данные с сервера</div>
                        <button>- Ингредиенты</button>
                    </div>
                </div>
            </div>
            <div className='AppMain-Recepts_IngredientsPopular'>
                <h1>Популярные ингредиенты</h1>
                <div className='AppMain-Recepts_IngredientsPopular_List'>
                    <div className='AppMain-Recepts_IngredientsPopular_ListBtns'>
                        <button>Куриное филе</button>
                        <button>Картофель</button>
                        <button>Помидоры</button>
                        <button>Репчатый лук</button>
                        <input type="button" value={'Данные с БД'} />
                        <input type="button" value={'Данные с БД'} />
                        <input type="button" value={'Данные с БД'} />
                    </div>
                    <div className='AppMain-Recepts_IngredientsPopular_ListHide'>
                        <button className='AppMain-Recepts_IngredientsPopular_ListHide1'>Показать 6 рецептов</button>
                        <img src={X} className='AppMain-Recepts_IngredientsPopular_ListHide2' />
                    </div>
                </div>
            </div>
        </div >
    )
}

const Recepts = () => {
    const [status, setStatus] = useState(false);
    return (
        <div className='AppMain-Recepts'>
            <img src={ImageBackForHeader} alt="" />
            <div className='AppMain-ReceptsContainer'>
                <div className="AppMain-ReceptsCategoryes">
                    <div className='AppMain-ReceptsCategoryes_left'>
                        <select className='AppMain-ReceptsCategoryes_leftFirstlist' name='firstList'>
                            <option disabled selected value="Любая Категория">Любая Категория</option>
                            <option value="Завтраки">Завтраки</option>
                            <option value="Бульоны">Бульоны</option>
                            <option value="Закуски">Закуски</option>
                            <option value="Напитки">Напитки</option>
                            <option value="Основные блюда">Основные блюда</option>
                            <option value="Паста и пицца">Паста и пицца</option>
                            <option value="Салаты">Салаты</option>
                            <option value="Соусы">Соусы</option>
                            <option value="Супы">Супы</option>
                            <option value="Сендвичи">Сендвичи</option>
                        </select>
                        <select className='AppMain-ReceptsCategoryes_leftSecondlist' name='secondList'>
                            <option disabled selected value="Любая Категория">Любая Кухня</option>
                            <option value="Первая Категория">Первая Категория</option>
                            <option value="Вторая Категория">Вторая Категория</option>
                        </select>
                        <select className='AppMain-ReceptsCategoryes_leftThirdlist' name='thirdList'>
                            <option disabled selected value="Любая Категория">Любое меню</option>
                            <option value="Первая Категория">Первая Категория</option>
                            <option value="Вторая Категория">Вторая Категория</option>
                        </select>
                    </div>
                    <div className='AppMain-ReceptsCategoryes_Right'>
                        <button className='AppMain-ReceptsCategoryes_RightBtn1' onClick={() => setStatus(!status)}>Ингредиенты, детали</button>
                        <button className='AppMain-ReceptsCategoryes_RightBtn2'>Подобрать рецепты</button>
                    </div>
                </div>
                <div className='Line'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1536" height="9" viewBox="0 0 1536 9" fill="none">
                        <path d="M0.332725 5.51009C0.334657 6.98285 1.53013 8.17519 3.00289 8.17326C4.47565 8.17132 5.66799 6.97585 5.66605 5.50309C5.66412 4.03034 4.46865 2.838 2.99589 2.83993C1.52313 2.84186 0.330794 4.03733 0.332725 5.51009ZM1530.33 3.50353C1530.33 4.97629 1531.53 6.16863 1533 6.1667C1534.48 6.16477 1535.67 4.9693 1535.67 3.49654C1535.66 2.02378 1534.47 0.831438 1533 0.83337C1531.52 0.835301 1530.33 2.03077 1530.33 3.50353ZM3.00005 6.00659L1533 4.00003L1533 3.00003L2.99873 5.00659L3.00005 6.00659Z" fill="#183851" />
                    </svg>
                </div>
                <div className='AppMain-ReceptsIngredients'>
                    {status ? <ShowIngredients /> : ''}
                    <div className='AppMain-Recepts_IngredientsSort'>
                        <div className='AppMain-Recepts_IngredientsSort1'>НАЙДЕНО 6 РЕЦЕПТОВ </div>
                        <div className='AppMain-Recepts_IngredientsSort2'>Сортировать :</div>
                        <div className='AppMain-Recepts_IngredientsSort2'>по релевантности</div>
                        <div className='AppMain-Recepts_IngredientsSort3'>по популярности</div>
                        <div className='AppMain-Recepts_IngredientsSort3'>по дате добавления</div>
                    </div>
                    <div className='AppMain-Recepts_IngredientsView'>
                        <ReceptsIngredient />
                        <ReceptsIngredient />
                        <ReceptsIngredient />
                        <ReceptsIngredient />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Recepts;