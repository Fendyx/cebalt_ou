import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (section) => {
    if (location.pathname === "/") {
      onNavigate(section);
    } else {
      navigate("/");
      setTimeout(() => {
        onNavigate(section);
      }, 50);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Company Info */}
          <div className="footer__company">
            <h3 className="footer__title">C.E. Balt OU</h3>
            <p className="footer__description">
              Leading international agricultural trading and logistics company,
              specializing in premium grains, oilseeds, and fresh fruits with
              delivery across Europe, South Caucasus, Kazakhstan, and Asia.
            </p>

            <div className="footer__socials">
              {/* Ссылка на почту */}
              <a href="mailto:info@cebalt.eu" className="footer__social-link">
                <motion.div whileHover={{ scale: 1.1 }} className="footer__icon">
                  <Mail size={18} />
                </motion.div>
              </a>
              
              {/* Ссылка на телефон */}
              <a href="tel:+359876494596" className="footer__social-link">
                <motion.div whileHover={{ scale: 1.1 }} className="footer__icon">
                  <Phone size={18} />
                </motion.div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__subtitle">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <button
                  className="footer__link-button"
                  onClick={() => handleScrollOrNavigate("hero")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="footer__link-button"
                  onClick={() => handleScrollOrNavigate("about")}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="footer__link-button"
                  onClick={() => handleScrollOrNavigate("products")}
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  className="footer__link-button"
                  onClick={() => handleScrollOrNavigate("logistics")}
                >
                  Logistics
                </button>
              </li>
              <li>
                <Link to="/contact" className="footer__link-anchor">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="footer__subtitle">Our Products</h4>
            <ul className="footer__products">
              <li>Wheat</li>
              <li>Corn</li>
              <li>Sunflower</li>
              <li>Rapeseed</li>
              <li>Fresh Fruits</li>
              <li>Other Grains</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© {currentYear} C.E. Balt OU. All rights reserved.</p>

          <div className="footer__policies">
            <Link to="/privacy-policy" className="footer__policy-link">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="footer__policy-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;