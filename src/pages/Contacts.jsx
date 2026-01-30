import { ContactSection } from '../components/sections/ContactSection';
import { Layout } from '../components/layout/Layout';

export default function Contacts() {
  const handleNavigate = () => {}; // можно оставить пустым, т.к. одна секция

  return (
    <Layout onNavigate={handleNavigate}>
      <ContactSection />
    </Layout>
  );
}
