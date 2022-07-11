import React from 'react';
import mrMoshaver from '../../images/mrMoshaverRowOne.png'
import styleCss from '../thirdrow/thirdrow.module.css'

const Thirdrow = () => {
    return (
        <div className='flex flex-wrap justify-center px-4  sizeScreen'>

            <div className='flex justify-center items-center w-full my-10 sm:mt-14 lg:w-2/5 lg:mt-0 ' >
                <img src={mrMoshaver} alt="picture"/>
            </div>

            <div className='flex flex-col items-center justify-center text-justify w-full lg:pr-8 sm:mt-14 sizeScreen sm:w-full lg:w-3/5'>
                <div>
                    <h1 className='text-2xl font-bold'>عملکردها ، هزینه ها ، قابلیت ها</h1>
                    <p className='leading-7 mt-4'>
                     آقای املاک برای رضایت خاطر هرچه بیشتر شما هزینه سرویس را مشروط بر مراجعه کاربر به بنر بامبوی شما کرده است.
                    این سرویس به گونه ای طراحی شده تا با انتخاب عملکرد ها ( لینک محور یا تماس محور ) باز خورد مناسبی نسبت به هزینه این سرویس برای شما داشته باشد.عملکردها باعث میشوند تا به صورت هوشمندانه در ازای هر بار مراجعه متقاضی به 
                    بنر شما بر اساس عملکردی که انتخاب کرده اید،مبلغ تعیین شده از شارژ حساب شما کثر شود.
                    <br/> در نظر داشته باشید  که هر چه مبلغ حداقل قیمت عملکرد را بالا تر تعیین کرده باشید،بنر شما نسبت به سایر بنر ها در اولویت بالا تری قرار خواهد گرفت.
                    <br/><br/> از دیگر قابلیت های سرویس بنر بامبو میتوان به انتخاب طراحی بنر بر اساس سلیقه شما،محل انتشار بنر و اولیوت نمایش بنر بر اساس معیار های شما اشاره کرد.
                    </p>
                </div>

                <div className=' flex flex-col justify-around items-center sizeScreen w-full my-14 sm:flex-row'>
                    <button className={`${styleCss.styleBTN} font-bold mb-8 sm:mb-0`}>ساخت فایل بامبو</button>
                    <button className={`${styleCss.styleBTN} font-bold`}  >درخواست مشاور</button>
                </div>
            </div>
        </div>
    );
};

export default Thirdrow;