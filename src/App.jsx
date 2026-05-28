import React from "react";
import Identity from "./pages/Identity.jsx";
import Patterns from "./pages/Patterns.jsx";
import bee from "/bee.png";
import BeeBanner from "./BeeBanner.jsx";
import BeeBanner from "./BeeBanner.jsx";
import BeeBanner from "./BeeBanner.jsx";

<BeeBanner />





export default function App() {
  return (
    <div>
      <h1>
        <img src={bee} alt="Bee" style={{ width: "40px", marginRight: "10px" }} />
        Bee Portal 🐝
      </h1>

      <Identity />
      <Patterns />
    </div>
  );
}
