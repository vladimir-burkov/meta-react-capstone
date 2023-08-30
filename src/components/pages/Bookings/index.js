import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { fetchAvailableTimeSlots, submitFormData } from '../../../utils/mockAPI';
import pages from '../../../utils/pages';
import BookingFormComponent from './BookingFormComponent';

const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAvailableTimeSlots(new Date())];

const Bookings = () => {
  const [availableTimeSlots, onDateChange] = useReducer(
    (times, date) =>
      fetchAvailableTimeSlots(new Date(date)).length !== 0
        ? fetchAvailableTimeSlots(new Date(date))
        : times,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitData = formData => {
    if (submitFormData(formData)) {
      navigate(pages.get('confirmedBooking').path);
    }
  };

  return (
    <div className="bookings">
      <h2>Table reservation</h2>
      <BookingFormComponent
        availableTimeSlots={availableTimeSlots}
        onDateChange={onDateChange}
        submitData={submitData}
      />
    </div>
  );
};

export default Bookings;
