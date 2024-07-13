import React from 'react';
import '../Styles/Bgimage.css'; 
import backgroundImage from '../assets/a.jpg'; 
import Booking from './Booking';

export const Bgimage = () => {
  return (
    <div className="bg-image">
      <div className='vacation-container ' >
        <h1>Book your Dream Vacation</h1>
        <h3>Explore New Experiance with EasyStay</h3>
      </div>
      <div className='bookingCon'>

        <Booking/>
      </div>
    </div>
  );
}
