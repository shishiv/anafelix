import Header from './sections/Header';
import Hero from './sections/Hero';
import Beneficios from './sections/Beneficios';
import ComoFunciona from './sections/ComoFunciona';
import Depoimentos from './sections/Depoimentos';
import Servicos from './sections/Servicos';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ana-tertiary">
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <ComoFunciona />
        <Depoimentos />
        <Servicos />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
