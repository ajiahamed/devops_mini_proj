import React, { useEffect, useState } from "react";
import { fetchMessage } from "./api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage().then(setMessage);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>⚡ Vite React DevOps App</h1>
      <p>API Response: {message}</p>
      <p>ENV: {import.meta.env.VITE_ENV}</p>
    </div>
  );
}

export default App;
