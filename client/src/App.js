import "./App.css";
import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="AddPassWords">
        <input
          type="text"
          placeholder="Eg. Facebook"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Eg. password123"
          onChange={(event) => {
            setPassword(event.target.value);
            console.log(password);
          }}
        />
        <button className="btn">Add Password</button>
      </div>
    </div>
  );
}

export default App;
