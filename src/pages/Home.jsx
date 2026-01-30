import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProductsSection from '../components/sections/ProductsSection';
import LogisticsSection from '../components/sections/LogisticsSection';
import AdvantagesSection from '../components/sections/AdvantagesSection';
import ContactSection from '../components/sections/ContactSection';
import Layout from '../components/layout/Layout';
import MachinerySection from '../components/sections/MachinerySection';

export default function Home() {
  const handleNavigate = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80; // высота шапки
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout onNavigate={handleNavigate}>
      <HeroSection onNavigate={handleNavigate} />
      <AboutSection />
      <ProductsSection />
      <MachinerySection />
      <LogisticsSection />
      <AdvantagesSection />
    </Layout>
  );
}
