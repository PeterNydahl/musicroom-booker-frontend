import { useEffect, useState } from 'react';

export const RoomSelect = ({onRoomSelect}) => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchRooms = async () => {
            try{
                const promiseResponseObject = await fetch(`http://tontid.local/wp-json/tontid/v1/rooms`);
                const responseDataAsJSObject = await promiseResponseObject.json();
                console.log("API response:", responseDataAsJSObject)
                setRooms(responseDataAsJSObject.data); 
            } catch (error) {
                console.log("Rummen gick tyvärr inte att hämta!", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);

    if (loading) return <p>Laddar rum...</p>

    return (
        <select onChange={(e) => onRoomSelect(e.target.value)} className="p-2 rounded border">
            <option value="">Välj rum</option>
            {rooms.map((room) => (
                <option key={room.room_id} value={room.room_id}>
                    {room.room_id}
                </option>
            ))}
        </select>
    )
}