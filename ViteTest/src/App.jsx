import { useState } from "react";
import Desktop from "./components/Desktop/Desktop.jsx";
import WelcomeScreen from "./components/Desktop/WelcomeScreen.jsx";
import "./styles/base.css";
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="app">
      {!loggedIn ? <WelcomeScreen onLogin={() => setLoggedIn(true)} /> : <Desktop />}
    </div>
  );
}
