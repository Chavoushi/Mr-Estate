import React from 'react';
import mrMoshaver from '../../images/mrMoshaverRowOne.png';
import styleCss from '../firstRow/firstRow.module.css'

const FirstRow = () => {
    return (
        <div className={`flex flex-wrap justify-center px-4 mt-8 sizeScreen`}>
            <div className='flex flex-col justify-evenly items-center sm:w-full  lg:w-3/5  lg:px-7'>
                    <div>
                        <h1 className='text-2xl font-bold'> با بنر آقای املاک دیده شوید ! </h1>
                        <p className='text-16 font-normal sizeScreen mt-4 leading-7 text-justify'>بنر آقای املاک سرویسی جدید و هوشمند برای دیده شدن هرچه بیشتر فایل های شماست . این سرویس با متمایز کردن فایل مدنظر به شما کمک میکند تا متقاضیان  بیشتر و واقعی جذب کنید،به معاملات خود سرعت ببخشید و نسبت به رقبای خود برتر باشید.</p>
                    </div>
                    <div className='w-full flex justify-center mt-8 '>
                        <button className={`${styleCss.bamboBtn} font-bold`}>ساخت بنر بامبو</button>
                    </div>
            </div>
            <div className={`flex justify-center items-center w-full mt-10 lg:w-2/5`}>
                <img src={mrMoshaver} alt="pictureMoshaver"  />
            </div>
        </div>
    );
};

export default FirstRow;