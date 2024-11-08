import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact(): React.ReactNode {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "" // User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send the message. Please try again.");
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact_me"
      className="min-h-screen flex justify-center items-center z-10"
    >
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold p-2 pb-10">Contact Me</h1>
        <div className="contact-form">
          <form onSubmit={sendEmail} className="flex flex-col space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
          <p>{status}</p>
        </div>
      </div>
    </section>
  );
}
