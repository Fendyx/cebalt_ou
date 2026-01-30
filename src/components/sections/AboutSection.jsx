import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Award, Users, Leaf } from "lucide-react";
import "./AboutSection.css";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Globe, value: "10+", label: "Countries Served" },
    { icon: Award, value: "10+", label: "Years of Collective Experience" },
    { icon: Users, value: "100+", label: "Trusted Partners" },
    { icon: Leaf, value: "10K+", label: "Tons Traded Annually" },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__container">
        <div className="about__grid">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="about__badge">About C.E. Balt OU</span>

            <h2 className="about__title">
              Your Trusted Partner in Agricultural Trade
            </h2>

            <p className="about__text">
            International agricultural trading company specializing in grains, oilseeds, and fresh fruits.
            </p>
            <p className="about__text">
            Serving markets across Europe, South Caucasus, Kazakhstan, and Asia with reliable logistics solutions.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about__image-wrapper"
          >
            <div className="about__image">
              <img
                src="https://images.unsplash.com/photo-1760541012030-2b4964413151?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBzdW5mbG93ZXIlMjBmaWVsZCUyMGJsdWUlMjBza3l8ZW58MXx8fHwxNzY5ODEwNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Agricultural Logistics"
              />
              <div className="about__overlay" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="about__stats"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="about__stat"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <stat.icon className="about__stat-icon" />
              <div className="about__stat-value">{stat.value}</div>
              <div className="about__stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
