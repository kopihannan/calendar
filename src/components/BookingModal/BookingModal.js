
import React from 'react';
import { toast } from 'react-hot-toast';

const BookingModal = ({ selectedDate, setSelectedDates, selectedDates }) => {
    const { employe, slots } = selectedDates;
    // const date = format(selectedDate, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const slot2 = form.slot2.value;
        const employe = form.employe.value;

        console.log(slot, slot2, employe);
        toast.success("successfull")


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">Add Schedule</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        {/* <input type="text" disabled value={date} className="input w-full input-bordered " /> */}
                        <label htmlFor="">Select Employee</label>
                        <select required name="employe" className="select select-bordered w-full">
                            <option disabled selected>Select Employee</option>
                            {
                                employe.map((employes, i) => <option
                                    value={employes}
                                    key={i}
                                >{employes}</option>)
                            }
                        </select>

                        <label htmlFor="">Select Time</label>
                        <div className='flex'>
                            <select required name="slot" className="select select-bordered w-1/2 mr-1">
                                <option disabled selected>Start Time</option>
                                {
                                    slots.map((slot, i) => <option
                                        value={slot}
                                        key={i}
                                    >{slot}</option>)
                                }
                            </select>
                            <select required name="slot2" className="select select-bordered w-1/2 ml-1">
                                <option disabled selected>End Time</option>
                                {
                                    slots.map((slot, i) => <option
                                        value={slot}
                                        key={i}
                                    >{slot}</option>)
                                }
                            </select>
                        </div>


                        <br />
                        <button type='submit' className="modal-action flex justify-center">
                            <label htmlFor="booking-modal" className='bg-[#F2385F] w-8/12 rounded-md text-white font-semibold py-3 cursor-pointer'>Add Schedule</label>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;