import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


# ⚛️ src/App.js
import React, { useEffect, useState } from "react";
import { fetchMessage } from "./api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage().then(setMessage);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 React DevOps App</h1>
      <p>API Response: {message}</p>
      <p>ENV: {process.env.REACT_APP_ENV}</p>
    </div>
  );
}

export default App;
