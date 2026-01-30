import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Layout from "../components/layout/Layout";
import "./Contacts.css"; // создадим отдельный CSS файл

export default function Contacts() {
  const handleNavigate = () => {}; // пусто, т.к. одна страница

  return (
    <Layout onNavigate={handleNavigate}>
      <section className="contact-page">
        <div className="contact-page__container">
          <motion.h1
            className="contact-page__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className="contact-page__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear from you! Reach out to us via email or phone.
          </motion.p>

          <motion.div
            className="contact-page__cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-page__card">
              <div className="contact-page__icon contact-page__icon--mail">
                <Mail size={28} />
              </div>
              <div className="contact-page__info">
                <span className="contact-page__label">Email</span>
                <a href="mailto:info@cebalt.eu" className="contact-page__link">
                  info@cebalt.eu
                </a>
              </div>
            </div>

            <div className="contact-page__card">
              <div className="contact-page__icon contact-page__icon--phone">
                <Phone size={28} />
              </div>
              <div className="contact-page__info">
                <span className="contact-page__label">Phone</span>
                <a href="tel:+359876494596" className="contact-page__link">
                  +359 876 494 596
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
