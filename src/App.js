import Login from "./components/Login";
import React, { useEffect, useState } from "react";
import "./css/App.css";
import "./components/Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);
  return <div className="app">{token ? <h1>yeman</h1> : <Login />}</div>;
}

export default App;
