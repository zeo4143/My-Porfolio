
export default function MySkills() {
  const languagesAndTools = [
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fhtml.svg&w=64&q=75",
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fcss.svg&w=64&q=75",
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fjavascript.svg&w=64&q=75",
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fnodejs.svg&w=64&q=75",
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fvite.svg&w=64&q=75",
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Ffirebase.svg&w=64&q=75",
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Ffigma.svg&w=64&q=75"


  ];

  const libraries = [
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Freact.svg&w=64&q=75",
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fredux.svg&w=64&q=75",
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fnextjs.svg&w=64&q=75",
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Ftailwindcss.svg&w=64&q=75",

  ];

  const databases = [
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fmysql.svg&w=64&q=75",
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fmongodb.svg&w=64&q=75",

  ]

  const other = [
    "https://www.shubhporwal.me/_next/image?url=%2Fskills%2Fgit.svg&w=64&q=75"
  ]
  return (
    <section id="skills">
      <div>
        <small>SKILLS</small>
        <h1 className="coloredH1">My Skills</h1>
        <h2>
          I like to take responsibility to craft aesthetic user <br />{" "}
          experience using modern frontend architecture.
        </h2>
      </div>
      <div className="languagesAndTools">
        <h3>LANGUAGES AND TOOLS</h3>
        <div className="skillsContainer">
          {languagesAndTools.map((item, index) => (
            <img src={item} key={index} className="skillsImages"/>
          ))}
        </div>
      </div>
      <div>
        <h3>LIBRARIES AND FRAMEWORKS</h3>
        <div className="skillsContainer">
        {libraries.map((item, index) => (
            <img src={item} key={index} className="skillsImages"/>
          ))}
        </div>
      </div>
      <div className="dbAndOther">
        <div >
          <h3>DATABASES</h3>
          <div className="skillsContainer">
          {databases.map((item, index) => (
            <img src={item} key={index} className="skillsImages"/>
          ))}
          </div>
        </div>
        <div>
          <h3>Other</h3>
          <div className="skillsContainer">
          {other.map((item, index) => (
            <img src={item} key={index} className="skillsImages"/>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
