import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./ContactSection.css";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you shortly.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "info@cebalt.com",
      link: "mailto:info@cebalt.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+372 XXX XXXX",
      link: "tel:+372XXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Tallinn, Estonia",
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__container">
        {/* Header */}
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="contact__badge">Get in Touch</span>
          <h2 className="contact__title">Let's Start a Conversation</h2>
          <p className="contact__text">
            Have questions about our products or services? We're here to help. Reach
            out to us today.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Contact Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact__field">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your inquiry..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="contact__submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <Send size={20} />
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="contact__info-box contact__info-box--main">
              <h3>Contact Information</h3>
              <p>Connect with our team to discuss how we can support your agricultural trading needs.</p>

              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  className="contact__info-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                >
                  <div className="contact__icon">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <div className="contact__info-title">{info.title}</div>
                    {info.link ? (
                      <a href={info.link} className="contact__info-link">
                        {info.detail}
                      </a>
                    ) : (
                      <div className="contact__info-link">{info.detail}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact__info-box contact__info-box--hours">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM (EET)</p>
              <p className="contact__info-note">
                For urgent inquiries outside business hours, please send us an email and we'll respond as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
