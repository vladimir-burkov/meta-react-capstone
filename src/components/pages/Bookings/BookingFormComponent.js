import React, { useState } from 'react';
import FormField from './FormField';

const BookingFormComponent = ({
  availableTimeSlots,
  onDateChange,
  submitData
}) => {
  const initialFormData = {
    date: new Date().toISOString().split('T')[0],
    time: availableTimeSlots[0],
    numberOfGuests: 1,
    occasion: 'Birthday'
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFieldChange = field => e => {
    const value = e.target.value;
    setFormData(prevData => ({ ...prevData, [field]: value }));

    if (field === 'date') {
      onDateChange(value);
    }
  };

  const isFieldValid = field => formData[field] !== '';
  const areAllFieldsValid = () =>
    Object.keys(formData).every(isFieldValid);

  const formFields = [
    { label: 'Date', id: 'booking-date', field: 'date', type: 'date', required: true },
    { label: 'Time', id: 'booking-time', field: 'time', type: 'select', options: availableTimeSlots, required: true },
    { label: 'Number of guests', id: 'booking-number-guests', field: 'numberOfGuests', type: 'number', min: 1, max: 10, required: true },
    { label: 'Occasion', id: 'booking-occasion', field: 'occasion', type: 'select', options: ['Birthday', 'Anniversary'], required: true }
  ];

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {formFields.map(({ label, id, field, type, ...props }) => (
        <FormField
          key={id}
          label={label}
          htmlFor={id}
          hasError={!isFieldValid(field)}
          errorMessage={`Please choose a valid ${field.toLowerCase()}`}
        >
          {type === 'select' ? (
            <select
              id={id}
              name={id}
              value={formData[field]}
              onChange={handleFieldChange(field)}
              {...props}
            >
              {props.options.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              id={id}
              name={id}
              value={formData[field]}
              onChange={handleFieldChange(field)}
              {...props}
            />
          )}
        </FormField>
      ))}
      <button
        className="button-primary"
        type="submit"
        disabled={!areAllFieldsValid()}
      >
        Make your reservation
      </button>
    </form>
  );
};

export default BookingFormComponent;
