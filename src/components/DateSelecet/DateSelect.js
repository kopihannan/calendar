import React from "react";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import './DateSelect.css'

const DateSelect = ({selectedDate, setSelectedDate}) => {


  return (
    <div className="flex justify-center">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
    </div>
  );
};

export default DateSelect;
