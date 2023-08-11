export default function MyProjects() {
  const array = [
    {
      link: "https://restaurent-chatbot.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64416a934b0ae60ea52f1e01/screenshot_2023-04-20-16-39-10-0000.png"
    },
    {
      link: "https://mdrafi-movie-search-engine.netlify.app//",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64c55543051bba0008e319a8/screenshot_2023-07-29-18-07-26-0000.png"
    },
    {
      link: "https://mdrafi-todolist-app.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64c555b1343c5900084dfd46/screenshot_2023-07-29-18-09-09-0000.png"
    },
    {
      link: "https://stey-1.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64cddec04900450007b317c4/screenshot_2023-08-05-05-32-30-0000.png"
    },
    {
      link: "https://steady-buttercream-2b781e.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64633e910da6f40008259756/screenshot_2023-05-16-08-28-26-0000.png"
    },
    {
      link: "https://ct1-design.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64c554b596356f0008d388ad/screenshot_2023-07-29-18-04-53-0000.png"
    },
  ];

  return (
    <section id="projects">
      <div>
        <p>PROJECTS</p>
        <h1 className="coloredH1">My Projects</h1>
        <h2>
          Some things I&apos;ve built with love, expertise and a pinch of
          magical ingredients.{" "}
        </h2>
      </div>
      <div className="projects">
        {array.map((item, index ) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className='singleProject'>
            <img src={item.img} alt="" />
          </a>
        ))}
      </div>
    </section>
  );
}
