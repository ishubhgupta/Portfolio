import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [acknowledgment, setAcknowledgment] = useState({
    message: "",
    type: "",
    show: false,
  });

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your user ID from environment variables for security
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add loading state to button
    const button = e.target.querySelector("button");
    button.disabled = true;
    button.classList.add("clicked");

    try {
      // Add form validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all fields");
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // Sanitize inputs (basic sanitization)
      const sanitizedData = {
        from_name: formData.name.trim(),
        message: formData.message.trim(),
        email_id: formData.email.trim(),
      };

      // Send email using EmailJS with environment variables
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        sanitizedData
      );

      console.log("Email sent successfully:", response);

      // Show success acknowledgment
      setAcknowledgment({
        message: "Message sent successfully! I will get back to you soon.",
        type: "success",
        show: true,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);

      // Show error acknowledgment
      setAcknowledgment({
        message:
          error.message || "Failed to send message. Please try again later.",
        type: "error",
        show: true,
      });
    } finally {
      // Re-enable button and remove clicked state
      button.disabled = false;
      setTimeout(() => button.classList.remove("clicked"), 300);

      // Hide acknowledgment after some time
      setTimeout(() => {
        setAcknowledgment((prev) => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-title">
          <h2>Get Connected</h2>
          <div className="underline"></div>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="visually-hidden">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="visually-hidden">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                maxLength={100}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="visually-hidden">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                maxLength={1000}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {acknowledgment.show && (
              <div className={`acknowledgment ${acknowledgment.type}`}>
                {acknowledgment.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
