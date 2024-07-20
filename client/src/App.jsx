import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Lobby from "./pages/Lobby";
import RoomPage from "./pages/Room";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
      <div></div>
    </>
  );
}

export default App;
