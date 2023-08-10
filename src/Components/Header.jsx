// import Navbar from "./Navbar";
import { RxHome, RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const [state, setState] = useState(false);
  console.log(state);
  return (
    <div className="header">
      <div className="headerIcons">
        <RxHome />
        {!state ? (
          <RxHamburgerMenu onClick={() => setState(true)} />
        ) : (
          <RxCross2 onClick={() => setState(false)} />
        )}
      </div>
      {state && (
        <div className="navbar">
          <p>Skills</p>
          <p>Projects</p>
          <p>Work</p>
          <p>Contact</p>
        </div>
      )}
    </div>
  );
}
