import './Recepts.css';
import X from '../AppPictures/x.svg';
import { useEffect, useState } from 'react';
import ImageBackForHeader from '../AppPictures/ImageBackForHeader.png';

const ReceptsIngredient = (props) => {
    return (
        <div className='AppMain-Recepts_IngredientsView_Object'>
            <a href="/AboutThisRecept">
                <img src={props.image} alt="" />
            </a>
            <div className='AppMain-Recepts_IngredientsView_ObjectData'>
                <a href="/AboutThisRecept">
                    <div className='AppMain-Recepts_IngredientsView_ObjectDataHeader'>
                        <p>{props.kitchenKategory}</p>
                        <p>{props.kitchenKategory2}</p>
                        <p>{props.kitchenKategory3}</p>
                    </div>
                    <div className='AppMain-Recepts_IngredientsView_ObjectDataName'>{props.name}</div>
                    <div className='AppMain-Recepts_IngredientsView_ObjectDataVendor'>Автор: {props.author}</div>
                    <div className='AppMain-Recepts_IngredientsView_ObjectDataInfo'>
                        <div className='AppMain-Recepts_IngredientsView_ObjectDataInfo_CountIngredients'>{props.countIngredients} ингредиентов</div>
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
                            <div>{props.countPortions} порций</div>
                        </div>
                        <div className='AppMain-Recepts_IngredientsView_ObjectDataInfo_CountTime'>
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
                            <div>{props.countTime}</div>
                        </div>
                    </div>
                </a>
                <div className='AppMain-Recepts_IngredientsView_ObjectDataGrade'>
                    <div className='AppMain-Recepts_IngredientsView_ObjectDataGrade_SubscribeRecepts'>
                        <div>
                            {props.subscribeRecepts === 1 ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                <path d="M21.4684 27L11.9728 15.0375L2.51533 27L2.51516 3.35085C2.51516 2.46215 2.33696 1.42252 2.88999 0.794118C3.44303 0.165712 3.81828 0 4.60039 0L19.3452 0C20.1273 0 20.5025 0.165712 21.0555 0.794118C21.6086 1.42252 21.4684 2.46215 21.4684 3.35085V27ZM11.9728 12.7059L19.3452 21.4412V1.98529H4.60039V21.4412L11.9728 12.7059Z" fill="#9B5B95" />
                            </svg> : 'Ничего'}
                            Добавить в рецепты</div>
                    </div>
                    <div className='AppMain-Recepts_IngredientsView_ObjectDataGrade_CountGrade'>
                        <div className='AppMain-Recepts_IngredientsView_ObjectDataGrade_CountGradeSubscribes'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                <g clip-path="url(#clip0_718_731)">
                                    <path d="M15.3413 20.1442L8.34131 11.2192L1.34131 20.1442V2.5C1.34131 1.83696 1.55202 1.20107 1.9271 0.732233C2.30217 0.263392 2.81088 0 3.34131 0L13.3413 0C13.8717 0 14.3805 0.263392 14.7555 0.732233C15.1306 1.20107 15.3413 1.83696 15.3413 2.5V20.1442ZM8.34131 7.64833L13.3413 14.0225V2.5H3.34131V14.0225L8.34131 7.64833Z" fill="#8CACC5" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_718_731">
                                        <rect width="16" height="20" fill="white" transform="translate(0.341309)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>{props.countSubscribes}</p>
                        </div>
                        <div className='AppMain-Recepts_IngredientsView_ObjectDataGrade_CountGradeLikes'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <g clip-path="url(#clip0_718_735)">
                                    <path d="M19.3188 6.43407C18.928 5.98375 18.4451 5.62264 17.9026 5.3752C17.3602 5.12777 16.7709 4.99978 16.1746 4.99991H12.8505L13.1305 3.29907C13.2295 2.70013 13.11 2.08552 12.7937 1.56736C12.4774 1.04919 11.9853 0.662002 11.4073 0.476401C10.8293 0.2908 10.2038 0.319158 9.64496 0.556304C9.0861 0.793449 8.63111 1.22358 8.36298 1.76824L6.76797 4.99991H4.50798C3.40331 5.00123 2.34427 5.44064 1.56316 6.22176C0.782044 7.00287 0.342632 8.06191 0.341309 9.16657L0.341309 13.3332C0.342632 14.4379 0.782044 15.4969 1.56316 16.2781C2.34427 17.0592 3.40331 17.4986 4.50798 17.4999H15.5913C16.5942 17.4958 17.5623 17.1318 18.3195 16.4742C19.0767 15.8166 19.5726 14.909 19.7171 13.9166L20.3046 9.74991C20.3874 9.15885 20.3422 8.55692 20.1721 7.98485C20.002 7.41278 19.711 6.88392 19.3188 6.43407ZM2.00798 13.3332V9.16657C2.00798 8.50353 2.27137 7.86765 2.74021 7.39881C3.20905 6.92997 3.84493 6.66657 4.50798 6.66657H6.17464V15.8332H4.50798C3.84493 15.8332 3.20905 15.5698 2.74021 15.101C2.27137 14.6322 2.00798 13.9963 2.00798 13.3332ZM18.6505 9.51574L18.0621 13.6824C17.9761 14.2774 17.6794 14.8218 17.226 15.2165C16.7725 15.6112 16.1925 15.83 15.5913 15.8332H7.84131V6.44491C7.91984 6.37649 7.98485 6.29395 8.03297 6.20157L9.85714 2.50574C9.92555 2.38235 10.0223 2.27695 10.1393 2.19821C10.2564 2.11947 10.3905 2.06963 10.5306 2.05279C10.6706 2.03595 10.8127 2.05259 10.9451 2.10135C11.0775 2.1501 11.1964 2.22958 11.2921 2.33324C11.374 2.42845 11.4339 2.54055 11.4674 2.66155C11.501 2.78255 11.5074 2.90946 11.4863 3.03324L11.0463 5.69991C11.027 5.81906 11.0338 5.94098 11.0662 6.05724C11.0987 6.17351 11.156 6.28133 11.2342 6.37327C11.3124 6.4652 11.4097 6.53904 11.5193 6.58968C11.6288 6.64032 11.7481 6.66656 11.8688 6.66657H16.1746C16.5325 6.66653 16.8862 6.7433 17.2118 6.8917C17.5374 7.04009 17.8273 7.25667 18.062 7.52677C18.2968 7.79687 18.4708 8.11422 18.5723 8.45735C18.6738 8.80049 18.7005 9.16141 18.6505 9.51574Z" fill="#8CACC5" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_718_735">
                                        <rect width="20" height="20" fill="white" transform="translate(0.341309)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>{props.countLikes}</p>
                        </div>
                        <div className='AppMain-Recepts_IngredientsView_ObjectDataGrade_CountGradeDisikes'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <g clip-path="url(#clip0_718_842)">
                                    <path d="M20.8005 10.25L20.213 6.08333C20.0686 5.09161 19.5732 4.18459 18.8169 3.52706C18.0606 2.86952 17.0935 2.5051 16.0913 2.5H5.00798C3.90331 2.50132 2.84427 2.94073 2.06316 3.72185C1.28204 4.50296 0.842632 5.562 0.841309 6.66667L0.841309 10.8333C0.842632 11.938 1.28204 12.997 2.06316 13.7782C2.84427 14.5593 3.90331 14.9987 5.00798 15H7.26798L8.86298 18.2317C9.13111 18.7763 9.5861 19.2065 10.145 19.4436C10.7038 19.6807 11.3293 19.7091 11.9073 19.5235C12.4853 19.3379 12.9774 18.9507 13.2937 18.4326C13.61 17.9144 13.7295 17.2998 13.6305 16.7008L13.3505 15H16.6746C17.2711 15 17.8607 14.872 18.4034 14.6245C18.9461 14.3771 19.4294 14.016 19.8205 13.5657C20.2117 13.1154 20.5016 12.5863 20.6707 12.0143C20.8397 11.4423 20.884 10.8406 20.8005 10.25ZM5.00798 4.16667H6.67464V13.3333H5.00798C4.34493 13.3333 3.70905 13.0699 3.24021 12.6011C2.77137 12.1323 2.50798 11.4964 2.50798 10.8333V6.66667C2.50798 6.00363 2.77137 5.36774 3.24021 4.8989C3.70905 4.43006 4.34493 4.16667 5.00798 4.16667ZM18.5613 12.4733C18.3267 12.7433 18.0368 12.9598 17.7113 13.1081C17.3859 13.2565 17.0323 13.3333 16.6746 13.3333H12.3688C12.2479 13.3333 12.1285 13.3596 12.0188 13.4103C11.9091 13.4611 11.8117 13.5351 11.7335 13.6272C11.6552 13.7193 11.598 13.8273 11.5657 13.9438C11.5333 14.0603 11.5267 14.1824 11.5463 14.3017L11.9863 16.9683C12.0074 17.0921 12.001 17.219 11.9674 17.34C11.9339 17.461 11.874 17.5731 11.7921 17.6683C11.6961 17.7718 11.5769 17.851 11.4444 17.8995C11.3118 17.9479 11.1696 17.9642 11.0295 17.9469C10.8894 17.9297 10.7554 17.8794 10.6385 17.8003C10.5216 17.7211 10.4252 17.6154 10.3571 17.4917L8.53298 13.7983C8.48485 13.706 8.41984 13.6234 8.34131 13.555V4.16667H16.0913C16.6932 4.16887 17.2743 4.38727 17.7286 4.78208C18.1829 5.17689 18.4802 5.7218 18.5663 6.3175L19.1546 10.4842C19.204 10.8389 19.1766 11.2001 19.0742 11.5432C18.9718 11.8864 18.7969 12.2036 18.5613 12.4733Z" fill="#8CACC5" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_718_842">
                                        <rect width="20" height="20" fill="white" transform="translate(0.841309)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>{props.countDislikes}</p>
                        </div>
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

const Recepts = (props) => {
    const [status, setStatus] = useState(false);
    debugger
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
                        {props.state.ReceptsData.map(data => <ReceptsIngredient
                            id={data.id}
                            idArray={data.idArray}
                            image={data.image}
                            kitchenKategory={data.kitchenKategory}
                            kitchenKategory2={data.kitchenKategory2}
                            kitchenKategory3={data.kitchenKategory3}
                            name={data.name}
                            author={data.author}
                            countIngredients={data.countIngredients}
                            countPortions={data.countPortions}
                            countTime={data.countTime}
                            subscribeRecepts={data.subscribeRecepts}
                            countSubscribes={data.countSubscribes}
                            countLikes={data.countLikes}
                            countDislikes={data.countDislikes}
                        />)}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Recepts;