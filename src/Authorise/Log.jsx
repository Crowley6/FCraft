import AuthBack from '../AppPictures/authorise.svg';
import email from '../AppPictures/email.png';
import google from '../AppPictures/google.png';
import password1 from '../AppPictures/password1.png';
import vk from '../AppPictures/vk.png';
import './Log.css';
import { useEffect } from 'react';

const Log = ({ setDataHide }) => {
    useEffect(() => {
        setDataHide(false)
    })
    return (
        <div className='AppMain-Log'>
            <img src={AuthBack} alt="" />
            <div className='AppMain-LogBox'>
                <h1>Личные учетные записи</h1>
                <h2>Вход</h2>
                <div className='AppMain-LogBox_Btns'>
                    <div>
                        <button><img src={email} alt="" />Почта</button>
                        <button><img src={password1} alt="" />Пароль</button>
                    </div>
                    <div className='LineForAuth'></div>
                    <div>
                        <button><img src={google} alt="" />Вход с помощью Google</button>
                        <button><img src={vk} alt="" />Вход с помощью VK</button>
                    </div>
                </div>
                <h3>У вас нет учетной записи?</h3>
                <button className='AppMain-LogBox_Reg'>Регистрация</button>
            </div>
        </div>
    )
}
export default Log;