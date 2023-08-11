import { RxHome, RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const [state, setState] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setState(false);
  };

  console.log(state);
  return (
    <div className="header">
      <div className="headerIcons">
        <a href="#"><RxHome /></a>
        {!state ? (
          <RxHamburgerMenu onClick={() => setState(true)} />
        ) : (
          <RxCross2 onClick={() => setState(false)} />
        )}
      </div>
      {state && (
        <ul className="navbar">
          <li onClick={scrollToSection}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={scrollToSection}>
            <a href="#projects">projects</a>
          </li>
          <li onClick={scrollToSection}>
            <a href="#work">Work</a>
          </li>
          <li onClick={scrollToSection}>
            <a href="#contact">contact</a>
          </li>
        </ul>
      )}
    </div>
  );
}
