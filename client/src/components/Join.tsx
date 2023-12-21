// fichier Join.tsx
import { useContext, useRef } from "react";
import { RoomContext } from "../context/RoomContext";

export const Join: React.FunctionComponent = () => {
    const ws = useContext(RoomContext);
    const joinRoom = () => {
            try {
                ws.ws.current.emit('create-room')
                console.log('create-room');
            } catch (error) {
                console.error(error);
            }
    }
    return (
        <button
            onClick={joinRoom}
            className="bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white"
        >
            Start new meeting
         </button>
    );
};