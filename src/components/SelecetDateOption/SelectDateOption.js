import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import SelectDataCard from "./SelectDataCard";

const SelectDateOption = ({ selectedDate, setSelectedDate }) => {
  const [dates, setDates] = useState([]);
  const [selectedDates, setSelectedDates] = useState(null);

  useEffect(() => {
    fetch("date.json")
      .then((res) => res.json())
      .then((data) => setDates(data));
  }, []);

  return (
    <div>
      <p className="text-center text-secondary font-bold my-5">
        Selected Date {format(selectedDate, "PP")}
      </p>
      <div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mx-auto gap-10">
          {
            dates.map(date => <SelectDataCard date={date} setSelectedDates={setSelectedDates} key={date._id}></SelectDataCard>)
          }
          {
            selectedDates &&
            <BookingModal
              selectedDates={selectedDates}
              setSelectedDates={setSelectedDates}
              selectedDate={selectedDate}
            ></BookingModal>
          }
        </div>
      </div>
    </div>
  );
};

export default SelectDateOption;
