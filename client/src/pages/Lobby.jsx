import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  useEffect(() => {
    socket.on("room:join", (data) => {
      console.log(`data from backend ${data}`);
    });
  }, [socket]);
  return (
    <div>
      <h1>lobby</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="room">Room Number</label>
        <input
          type="text"
          placeholder="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button>Join </button>
      </form>
    </div>
  );
};

export default Lobby;
