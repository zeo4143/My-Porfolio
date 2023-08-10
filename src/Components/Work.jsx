export default function Work() {
  const work = [
    {
      role: "FrontEnd Developer(React js)",
      duration: "2 Months",
      description: "Acheijdsvkjk",
      company: "Celebal Technologies",
      achievement: "See Achievement",
    },
  ];
  return (
    <section>
      <div>
        <p>WORK</p>
        <h1 className="coloredH1">My Works</h1>
        <h2>
          Some things I&apos;ve built with love, expertise and a pinch of
          magical ingredients.{" "}
        </h2>
        <div>
          {work.map((item, index) => (
            <div key={index} style={{ backgroundColor: "red" }}>
              <div>
                <h1>{item.company}</h1>
                <small>{item.duration}</small>
              </div>
              <p>{item.role}</p>
              <p></p>
              <p>
                <span>{item.description}</span>
              </p>
              <p>{item.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
