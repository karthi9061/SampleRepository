// src/Booking.js
import React, { useState } from 'react';
import styles from '../Styles/Booking.module.css';

const Booking = () => {
    const [checkInDate, setCheckInDate] = useState('2024-07-13');
    const [checkOutDate, setCheckOutDate] = useState('2024-07-14');
    const [room, setRoom] = useState(1);
    const [guests, setGuests] = useState('Adults 2 Children 0');

    return (
        <div className={styles.bookingContainer}>
            <div className={styles.bookingField}>
                <label htmlFor="checkin">Check In</label>
                <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                />
            </div>
            <div className={styles.bookingField}>
                <label htmlFor="checkout">Check Out</label>
                <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                />
            </div>
            <div className={styles.bookingField}>
                <label htmlFor="room">Room</label>
                <select
                    id="room"
                    name="room"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                >
                    <option value="1">1</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            <div className={styles.bookingField}>
                <label htmlFor="guests">Guests</label>
                <input
                    type="text"
                    id="guests"
                    name="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                 <div className={styles.bookingField}>
                <button type="button">Search Room</button>
            </div>
            </div>
           
        </div>
    );
};

export default Booking;
