import chatbotApp from "../assets/chatbotApp.png"

export default function MyProjects() {
  const array = [
    {
        link : "https://restaurent-chatbot.netlify.app/",
        img : chatbotApp
    }
  ]

  return (
    <div>
      <section style={{ backgroundColor: "grey" }}>
        <center>
          <h1>My Projects</h1>
        </center>
        {array.map((item, index) => (
          <div key={index} >
            <img src={item.img} alt="" className="projectsCard"/>
          </div>
        ))}
      </section>
    </div>
  );
}
