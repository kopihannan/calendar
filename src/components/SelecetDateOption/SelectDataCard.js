import React from 'react';
import plus from '../../assets/image/plus.png'

const SelectDataCard = ({ date, setSelectedDates }) => {

    return (
        <div>
            <div className='w-[165px] bg-red-200 h-[165px] mx-auto flex justify-center items-center'>
                <label
                onClick={()=> setSelectedDates (date)}
                    htmlFor="booking-modal"
                    className='cursor-pointer p-8'
                ><img src={plus} alt="" className='w-5' />
                </label>
            </div>
        </div>
    );
};

export default SelectDataCard;