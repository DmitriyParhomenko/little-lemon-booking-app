import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchAPI, submitAPI } from '../api/api';
import { Helmet } from 'react-helmet-async';

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action));
};

const Reservations = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const initialValues = {
    name: '',
    date: '',
    time: '',
    guests: 1,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    date: Yup.date()
      .required('Date is required')
      .test(
        'is-future-date',
        'Please select a future date',
        function (value) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const selectedDate = new Date(value);
          return selectedDate > today;
        }
      ),
    time: Yup.string().required('Time is required'),
    guests: Yup.number().min(1, 'Guests must be at least 1').required('Guests is required'),
  });

  const handleSubmit = (values) => {
    const success = submitAPI(values);
    if (success) {
      navigate('/booking-confirmed');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Reserve a Table | Little Lemon</title>
        <meta
          name="description"
          content="Book your table at Little Lemon and enjoy an unforgettable Mediterranean dining experience in the heart of Chicago."
        />
      </Helmet>
      <div className="max-w-xl mx-auto py-16 m-20 px-4 bg-white shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Reserve a Table</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#495E57]"
                />
                <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="date" className="block mb-2 font-medium text-gray-700">Date</label>
                <Field
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#495E57]"
                  onChange={(e) => {
                    const selectedDate = e.target.value;
                    setFieldValue('date', selectedDate);
                    dispatch(selectedDate);
                  }}
                />
                <ErrorMessage name="date" component="p" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="time" className="block mb-2 font-medium text-gray-700">Time</label>
                <Field
                  as="select"
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#495E57]"
                >
                  <option value="">Select a time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </Field>
                <ErrorMessage name="time" component="p" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="guests" className="block mb-2 font-medium text-gray-700">Number of Guests</label>
                <Field
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#495E57]"
                />
                <ErrorMessage name="guests" component="p" className="text-red-500 text-sm mt-1" />
              </div>
              <button type="submit" className="w-full bg-[#495E57] hover:bg-[#3e4e4a] text-white py-3 font-semibold rounded-md transition duration-200">
                Book Now
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Reservations;