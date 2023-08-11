import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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
    <section id="contact">
      <div>
        <p>CONTACT</p>
        <h1 className="coloredH1">Contact</h1>
        <h2>Get In Touch</h2>
      </div>

      <div>
        <form className="form">
          <div className="input-field">
            <input
              required
              className="input"
              type="text"
              name="name"
              autoComplete="off"              
              value={formData.name}
              onChange={handleChange}
            />
            <label className="input-label" htmlFor="name">
              Name
            </label>
          </div>

          <div className="input-field">            
            <input
              required
              className="input"
              type="name"
              name="email"             
              value={formData.email}
              onChange={handleChange}
            />
            <label className="input-label" htmlFor="email">
              Email
            </label>
          </div>

          <div className="input-field">
            <textarea
            rows="10"
              required
              className="input"
              name="message"
              value={formData.message}
              onChange={handleChange} 
            />
             <label className="input-label" htmlFor="message">
              Message
            </label>
          </div>

          <button className="submitBtn" type="submit">
            Send <HiOutlineArrowNarrowRight />
          </button>
        </form>
      </div>
    </section>
  );
}
