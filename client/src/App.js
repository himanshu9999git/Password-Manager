import "./App.css";
import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const addPassword = () => {
    Axios.post("http://localhost:3001/addPassword", { title: title, password: password });
  };
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
          }}
        />
        <button className="btn" onClick={addPassword}>Add Password</button>
      </div>
    </div>
  );
}

export default App;
