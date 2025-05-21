import styles from './ShowSchedule.module.css';
import React from 'react'; 

export const ShowSchedule = ({ roomId }) => {
  return (
    <div className={styles.scheduleWrapper}>
      {/* Bokningsschema Header */}
      <h1>Bokningsschema rum: {roomId}</h1>

      <div className={styles.schedule}>
        {/* Rubrikrad */}
        <div className={styles.scheduleHeader}>Tid</div>
        <div className={styles.scheduleHeader}>Måndag</div>
        <div className={styles.scheduleHeader}>Tisdag</div>
        <div className={styles.scheduleHeader}>Onsdag</div>
        <div className={styles.scheduleHeader}>Torsdag</div>
        <div className={styles.scheduleHeader}>Fredag</div>

        {/* Tidsslot-kolumnen */}
        <div className={styles.scheduleTimeSlots}>
          {[...Array(12)].map((_, i) => {
            const hour = 8 + i;
            return (
              <React.Fragment key={i}>
                <div className={styles.scheduleTimeslot}>{hour}:00</div>
                <div className={styles.scheduleTimeslot}>{hour}:30</div>
              </React.Fragment>
            );
          })}
          <div className={styles.scheduleTimeslot}>20:00</div>
        </div>

        {/* Måndag */}
        <div className={`${styles.scheduleWeekday} ${styles.monday}`}>
          {/* Lägg in dina Monday-bokningar här */}
        </div>

        {/* Tisdag */}
        <div className={`${styles.scheduleWeekday} ${styles.tuesday}`}>
          {/* Lägg in dina Tuesday-bokningar här */}
        </div>

        {/* Onsdag */}
        <div className={`${styles.scheduleWeekday} ${styles.wednesday}`}>
          {/* Lägg in dina Wednesday-bokningar här */}
        </div>

        {/* Torsdag */}
        <div className={`${styles.scheduleWeekday} ${styles.thursday}`}>
          {/* Lägg in dina Thursday-bokningar här */}
        </div>

        {/* Fredag */}
        <div className={`${styles.scheduleWeekday} ${styles.friday}`}>
          {/* Lägg in dina Friday-bokningar här */}
        </div>
      </div>
    </div>
  );
};
