import React from "react";
import { useState } from "react";

export const Sidebar = () => {
  const [showLink, setShowLink] = useState(false);
  return (
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
  );
};
