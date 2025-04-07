import React, { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import { useAppContext } from "./context/appContext";

function App() {
  const { state, dispatch } = useAppContext();
  useEffect(() => {
    dispatch({
      type: "SET_USERNAME",
      username: "UtkarshChahal",
    });
  }, []);
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
