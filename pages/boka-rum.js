import { BookingList } from "./components/BookingList"
import { RoomSelect } from "./components/RoomSelect"
import { useEffect, useState } from "react";
import { WeekSelect } from "./components/WeekSelect";
import { ShowSchedule } from "./components/ShowSchedule";

export default function RoomBookingPage(props) {
    const [selectedRoom, setSelectedRoom] = useState("");
    const [selectedWeek, setSelectedWeek] = useState("");

    const handleRoomSelect = (roomId) => {
        setSelectedRoom(roomId);
    }
    
    const handleWeekSelect = (week) => {
        setSelectedWeek(week);
    }

    return (
        <div className="p-6 bokaRumWrapper">
            <ShowSchedule/>
            <h1 className="text-2xl font-bold mb-4">Välj ett rum för att se bokningar</h1>
            <RoomSelect onRoomSelect={handleRoomSelect}/>
            <WeekSelect onWeekSelect={handleWeekSelect} />
            {selectedRoom && selectedWeek && (
                    <BookingList roomId={selectedRoom} week={selectedWeek}/>
            )}
            {selectedWeek && (
                <p>Vald vecka: {selectedWeek}</p>
            )}
        </div>
    )
}