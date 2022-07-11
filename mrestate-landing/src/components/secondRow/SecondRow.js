import React from 'react';
import styleCss from '../secondRow/secondRow.module.css';

const SecondRow = () => {
    return (
        <div className='sizeScreen flex justify-around flex-wrap mt-20 px-4'>
            <div className=' w-full sm:w-1/2 sm:px-5 md:w-2/5 '>
                <div className={`${styleCss.styleBox} rounded-xl px-6 py-10 sm:mb-10 flex  flex-col justify-between items-center `}>
                    <svg className={styleCss.styleSVG} xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <h3 className='my-3 text-18 font-bold' > لینک محور</h3>
                    <p>با انتخاب قابلیت لینک محور، متقاضی بعد از  کلیک روی بنر بامبو شما،برای مشاهده اطلاعات تکمیلی به صفحه فایل بامبو شده هدایت میشود</p>
                </div>
            </div>
            <div className=' w-full sm:w-1/2 sm:px-5 md:w-2/5'>
                <div className={`${styleCss.styleBox} rounded-xl p-5 py-10 sm:mb-10 flex  flex-col justify-between items-center`}>
                    <svg  className={styleCss.styleSVG}  xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path  stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                    <h3 className='my-3 text-18 font-bold'> تماس محور</h3>
                    <p>با انتخاب ویژگی تماس محور،متقاضی بعد از مشاهده بنر بامبو شما و کلیک روی آن برای اطلاعات فایل بامبو شده با شما تماس خواهد گرفت</p>
                </div>
            </div>
        </div>
    );
};

export default SecondRow;