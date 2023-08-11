import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import Typewriter from "./TyperWriter/TypeWriter";

export default function Hero() {
  const texts = [
    "A pragmatic Frontend Developer",
    "I build things for the web",
    "I create aesthetic and modern apps",
  ];

  return (
    <section className="hero">
      <div className="heroIntro">
        <div>
          <h5 style={{ color: "#9f55ff" }}>Hi, My Name is </h5>
          <h1 className="heroH1">
            Shaik <span className="underLinedH1">Mahammad Rafi</span>
          </h1>
        </div>
        <Typewriter texts={texts} delayAfterTyping={2000} />
        <div className="heroIcons">
          <a href="mailto:heatblast4143@gmail.com">
            <FiMail className="eachHeroIcons" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-mahammad-rafi-7a4b31202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="eachHeroIcons" />
          </a>
          <a
            href="https://github.com/zeo4143"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="eachHeroIcons" />
          </a>
          <a
            href="https://www.instagram.com/r_af_ii.04/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram className="eachHeroIcons" />
          </a>
          <a
            href="https://twitter.com/heatblast4143"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter className="eachHeroIcons" />
          </a>
        </div>
        <a href="#contact">
          <button className="heroBtn">Let&apos;s Talk</button>
        </a>
      </div>
      <div className="heroDiv2">
        <img
          src="https://www.wingstechsolutions.com/wp-content/uploads/2022/03/full-stack-development.gif"
          className="herogif"
        />
      </div>
    </section>
  );
}
