import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section>
      <div>
        <p>CONTACT</p>
        <h1 className="coloredH1">Contact</h1>
        <h2>Get In Touch</h2>
      </div>
      <section>
        <form className="form">
          <div className="input-field">
            <label className="input-label" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="input-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="input"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
}
