import { useState } from "react";
import { useEffect } from "react";

export const BookingList = ({ roomId, week }) => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!roomId) return;
        const fetchBookings = async () => {
            //rensa eventuellt gammal data
            setLoading(true);
            setError(null);
            setBookings([]);
            
            try {
                const promiseResponseObject = await fetch(
                  `http://tontid.local/wp-json/tontid/v1/bookings/?room=${roomId}&week=${week}`
                );
                const responseDataAsJSObject = await promiseResponseObject.json();

                if (responseDataAsJSObject.status === "success") {
                    setBookings(responseDataAsJSObject.data);
                } else {
                    throw new Error(responseDataAsJSObject.message || "något gick snett!")
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBookings();
    }, [roomId, week]);

    if (loading) return <p>Laddar bokningar...</p>;
    if (error) return <p>Fel: {error}</p>;
    if (bookings.length === 0) return <p>Inga bokningar gjorda för rum {roomId}.</p>;

    return(
        <div>
            <h2>Bokningar för rum {roomId}</h2>
            <ul>
                {bookings.map((booking, index) => (
                    <li key={index}>
                        {booking.booking_start + "-" + booking.booking_end}
                    </li>
                ))}
            </ul>
        </div>
    );  
}