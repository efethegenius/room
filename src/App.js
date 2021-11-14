import "./App.css";
import { Rooms } from "./Rooms";
import { Body } from "./Body";
import hamburger from "../src/icon-hamburger.svg";
// import { Sidebar } from "./Sidebar";
import { useState } from "react";

function App() {
  const [showLink, setShowLink] = useState(false);
  const handleClick = () => {
    setShowLink(!showLink);
  };
  return (
    <>
      <button className="ham" onClick={handleClick}>
        <img src={hamburger} alt="menu" />
      </button>
      <h1 className="logo">room</h1>
      <section>
        <div className={`${showLink ? "modal show-modal" : `modal`}`}>
          <ul className="nav-link">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">shop</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </div>
      </section>
      <Rooms />
      <Body />
    </>
  );
}

export default App;
