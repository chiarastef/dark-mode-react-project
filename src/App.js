import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function getStorageMode() {
  let mode = "light-mode";
  if (localStorage.getItem("mode")) {
    mode = localStorage.getItem("mode");
  }
  return mode;
}

function App() {
  const [mode, setMode] = useState(getStorageMode());

  function toggleMode() {
    if (mode === "light-mode") {
      setMode("dark-mode");
    } else {
      setMode("light-mode");
    }
  }

  useEffect(() => {
    document.documentElement.className = mode;
    // Save mode to local storage
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleMode}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
