import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import ReactPlayer from "react-player";

export default function RoomPage() {
  const socket = useSocket();
  const [remoteSocketID, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState(null);

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  });

  const handelCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    setMyStream(stream);
  }, []);
  useEffect(() => {
    socket.on("user:joined", handleUserJoined);

    return () => {
      socket.on("user:joined", handleUserJoined);
    };
  }, [socket, handleUserJoined]);

  return (
    <div>
      <h1>Room Page</h1>
      <h4>{remoteSocketID ? "Connected" : "No One in room"}</h4>
      {remoteSocketID && <button onClick={handelCallUser}>Call</button>}
      {myStream && (
        <>
          <h1>My Stream</h1>
          <ReactPlayer
            playing
            muted
            url={myStream}
            height="300px"
            width="300px"
          />
        </>
      )}
    </div>
  );
}
