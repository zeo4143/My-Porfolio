import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <div className="footer">
      <h2>Feel free to connect on social media.</h2>
      <div className="footerIcons">
        <a href="mailto:heatblast4143@gmail.com">
          <FiMail className="eachFooterIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/shaik-mahammad-rafi-7a4b31202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="eachFooterIcon" />
        </a>
        <a
          href="https://github.com/zeo4143"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="eachFooterIcon" />
        </a>
        <a
          href="https://www.instagram.com/r_af_ii.04/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram className="eachFooterIcon" />
        </a>
        <a
          href="https://twitter.com/heatblast4143"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter className="eachFooterIcon" />
        </a>
      </div>
      <a href="#contact">
        <button>Let&apos;s Talk</button>
      </a>
      <center>
        <b>
          Developed by <span className="blinking-icon"> 💞 </span>{" "}
          <span className="footerNameHighlight">Shaik Mahammad Rafi</span>
        </b>
      </center>
    </div>
  );
}
