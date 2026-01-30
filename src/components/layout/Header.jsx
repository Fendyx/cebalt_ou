import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", section: "hero" },
    { label: "About", section: "about" },
    { label: "Products", section: "products" },
    { label: "Logistics", section: "logistics" },
    { label: "Why Choose Us", section: "advantages" },
    { label: "Contact", section: "contact" },
  ];

  const handleNavClick = (section) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`header ${isScrolled ? "header--scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header__container">
          {/* Logo */}
          <motion.div
            className="header__logo"
            whileHover={{ scale: 1.02 }}
            onClick={() => onNavigate("hero")}
          >
            <span className="header__logo-title">C.E. Balt OU</span>
            <span className="header__logo-subtitle">
              Agricultural Trading & Logistics
            </span>
          </motion.div>

          {/* Desktop nav */}
          <nav className="header__nav">
            {menuItems.map((item) => (
              <motion.button
                key={item.section}
                className="header__link"
                onClick={() => handleNavClick(item.section)}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="header__link-underline" />
              </motion.button>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            className="header__burger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        className={`mobile-menu ${
          isMobileMenuOpen ? "mobile-menu--open" : ""
        }`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="mobile-menu__nav">
          {menuItems.map((item) => (
            <motion.button
              key={item.section}
              className="mobile-menu__link"
              onClick={() => handleNavClick(item.section)}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Header;
