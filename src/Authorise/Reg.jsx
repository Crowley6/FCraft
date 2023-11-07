import AuthBack from '../AppPictures/authorise.svg';
import email from '../AppPictures/email.png';
import google from '../AppPictures/google.png';
import vk from '../AppPictures/vk.png';
import './Reg.css'
import { useEffect } from 'react';

const Reg = ({ setDataHide }) => {
    useEffect(() => {
        setDataHide(false)
    })
    return (
        <div className='AppMain-Reg'>
            <img src={AuthBack} alt="" />
            <div className='AppMain-RegBox'>
                <h1>Личные учетные записи</h1>
                <h2>Как создать учетную запись?</h2>
                <div className='AppMain-RegBox_Btns'>
                    <div>
                        <button className='AppMain-RegBox_BtnsRegHelp'>Зарегистрироваться с помощью</button>
                    </div>
                    <div className='LineForAuth2'></div>
                    <div className='AppMain-RegBox_BtnsLink'>
                        <button><img src={google} alt="" />Вход с помощью Google</button>
                        <button><img src={email} alt="" />Адрес электронной почты</button>
                        <button><img src={vk} alt="" />Вход с помощью VK</button>
                    </div>
                </div>
                <h3>У вас нет учетной записи?</h3>
                <button className='AppMain-RegBox_Log'>Регистрация</button>
            </div>
        </div>
    )
}
export default Reg;