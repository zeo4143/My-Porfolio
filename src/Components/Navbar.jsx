import { GiMoebiusTriangle } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="navcontainer">
      <h1>
        <GiMoebiusTriangle  className="navHome"/>
      </h1>
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
