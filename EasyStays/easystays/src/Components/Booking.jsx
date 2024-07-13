// src/Booking.js
import React, { useState } from 'react';
import styles from '../Styles/Booking.module.css';

const Booking = () => {
    const [checkInDate, setCheckInDate] = useState('2024-07-13');
    const [checkOutDate, setCheckOutDate] = useState('2024-07-14');
    const [room, setRoom] = useState(1);
    const [priceRange, setPriceRange] = useState('0-100');
    const [location, setLocation] = useState('');
    const [starRating, setStarRating] = useState(0);

    const handleStarClick = (rating) => {
        setStarRating(rating);
    };

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
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div className={styles.bookingField}>
                <label htmlFor="priceRange">Price Range</label>
                <select
                    id="priceRange"
                    name="priceRange"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                >
                    <option value="0-100">0-100rs</option>
                    <option value="100-200">100-200rs</option>
                    <option value="200-300">200-300rs</option>
                    <option value="300+">300+</option>
                </select>
            </div>
            <div className={styles.bookingField}>
                <label htmlFor="location">Location</label>
                <input
                    type="search"
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className={styles.bookingField}>
                <label>Star Rating</label>
                <div className={styles.starRating}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`${styles.star} ${starRating >= star ? styles.filled : ''}`}
                            onClick={() => handleStarClick(star)}
                        >
                            ★
                        </span>
                    ))}
                    <div className={styles.bookingField}>
                        <button type="button">
                            <i className="fas fa-search"></i> Search Room
                        </button>
                    </div>̥
                </div>
            </div>

        </div>
    );
};

export default Booking;
