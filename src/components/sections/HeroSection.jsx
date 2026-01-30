import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({ onNavigate }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };
  const navigate = useNavigate();

  return (
    <section id="hero" className="hero">
      {/* Background */}
      <div className="hero__background">
        <div
          className="hero__image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
          }}
        />
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__container">
        <div className="hero__content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="hero__badge">
              Global Agricultural Trading
            </span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            C.E. Balt OU
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Agricultural commodities & logistics across Europe and Asia
          </motion.p>

          <motion.div
            className="hero__buttons"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="hero__btn hero__btn--primary"
              onClick={() => onNavigate("products")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Products
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              className="hero__btn hero__btn--secondary"
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <TrendingUp size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="hero__scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="hero__scroll-dot" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
