// fichier Room.tsx
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { RoomContext } from "../context/RoomContext";
import { VideoPlayer } from "../components/VideoPlayer";
import { PeerState } from "../context/peerReducer";

export const Room = () => {
    const {roomId} = useParams();
    const { ws, me, stream, peers } = useContext(RoomContext);

    useEffect(() => {
        if(me) ws.current.emit("join-room", {roomId: roomId, peerId: me._id});
    }, [roomId, ws , me]);
    return (
        <>
            Room Id {roomId}
            <div className="grid grid-cols-4 gap-4">
                <VideoPlayer stream={stream} />
                {Object.values(peers as PeerState).map((peer) => (
                    <VideoPlayer stream={peer.stream} />
                ))}
            </div>
        </>
    )
}