export default function Work() {
  const work = [
    {
      role: "FrontEnd Developer (React)",
      company: "Celebal Technologies",
      duration: "2 Months",
      description: [
        "Joined as an 2 Months Intern.",
        "worked on Restaurent Chatbot Apllication using react",
        "Rewarded with silver 🥈 badge for successful completion of project 😊",
      ],
    },
  ];
  return (
    <section id="work">
      <div>
        <p>WORK</p>
        <h1 className="coloredH1">Experience</h1>
        <h2>A quick recap of where I&apos;ve worked/Interned</h2>
        <div className="workContainer">
          {work.map((item, index) => (
            <div key={index} className="workContent">
              <div className="work">
                <center className="work15">
                  <h1>{item.company}</h1>
                  <hr />
                </center>
                <div className="work70">
                  {item.description.map((listItems, index) => (
                    <div key={index} className="numbering">
                      <span>{index + 1}. </span>
                      <li className="li">{listItems}</li>
                    </div>
                  ))}
                </div>

                <div className="work15">
                  <hr />
                  <p>{item.role}</p>
                  <div className="certificate">
                    <small>{item.duration}</small>
                    <p>see achievement...</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
