import React, { useState } from 'react';
import DateSelect from '../DateSelecet/DateSelect';
import SelectDateOption from '../SelecetDateOption/SelectDateOption';

const MainDate = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <DateSelect selectedDate={selectedDate} setSelectedDate={setSelectedDate}></DateSelect>
            <SelectDateOption selectedDate={selectedDate} setSelectedDate={setSelectedDate}></SelectDateOption>
        </div>
    );
};

export default MainDate;