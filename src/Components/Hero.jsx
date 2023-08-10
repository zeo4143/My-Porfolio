import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero">
      <div>
      <p style={{ color: "#9f55ff" }}>Hi, My Name is </p>
      <h1>Shaik Mahammad Rafi</h1>
      {/* plot Dynamic data herre */}
      <div className="icons">
        <FiMail />
        <FiLinkedin />
        <FiGithub />
        <FiInstagram />
        <FiTwitter />
      </div>
      <button>{"Let's Talk"}</button>
      </div>
      
    </section>
  );
}
