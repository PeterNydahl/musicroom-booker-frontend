import React from "react";
import styles from "../ShowSchedule/ShowSchedule.module.css";

export const BookingItem = ({ booking }) => {
  // Om booking inte finns, rendera inget alls
  if (!booking || !booking.booking_start || !booking.booking_end) {
    return null;
  }

  const bookingStart = new Date(booking.booking_start);
  const bookingEnd = new Date(booking.booking_end);

  const bookingStartDate = bookingStart.toISOString().split("T")[0];
  const bookingStartTime = bookingStart.toTimeString().substring(0, 5);
  const bookingEndTime = bookingEnd.toTimeString().substring(0, 5);

  const dayStart = new Date(`${bookingStartDate}T08:00:00`);
  const minutesFromDayStart =
    (bookingStart.getTime() - dayStart.getTime()) / 60000;
  const bookingDuration = (bookingEnd.getTime() - bookingStart.getTime()) / 60000;

  const gridRowStart = minutesFromDayStart + 1; // eftersom CSS-grid börjar på 1

  return (
    <div
      className={styles.booking}
      style={{ gridRow: `${gridRowStart} / span ${bookingDuration}` }}
    >
      <div className={styles.bookingHeading}>
        {booking.lesson} 
      </div>
      <div>
        {bookingStartTime}–{bookingEndTime}
        &nbsp;({bookingStartDate})
      </div>
      <div>
      </div>
    </div>
  );
};
