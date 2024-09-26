import React, { useState } from "react";
import "./ContactForm.scss"; // Assuming you save the styles as ContactForm.css

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Post form data to backend
    const response = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send the message.");
    }
  };

  return (
    <div className="container">
      <div className="rectangle">
        <form onSubmit={handleSubmit}>
          <h2 className="talk-card-title">Contact Me</h2>
          <input
            className="talk-card-input"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="talk-card-input"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="talk-card-textarea"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="talk-button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
