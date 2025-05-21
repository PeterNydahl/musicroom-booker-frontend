import { gql } from "@apollo/client";
import client from "client"; // Se till att detta är korrekt importerat

export const MusicRoomBlock = ({ bookingStatus }) => {
};

// export const MusicRoomBlock = ({bookingStatus, roomCategory}) => {
//     return (
//         <>
//         <div>
//             Room category: {roomCategory}
//         </div>
//         <div>
//             Room status: {
//                 bookingStatus === "1" ? "The room is available!" : "The room is booked!" 
//             }
//         </div>
//         </>
//     )
// } 