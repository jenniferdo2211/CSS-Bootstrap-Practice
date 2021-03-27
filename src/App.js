import './App.css';
import { Features } from './Features/Features';
import { Press } from './Press/Press';
import { Pricing } from './Pricing/Pricing';
import { Testinomials } from './Testinomials/Testinomials';
import { Action } from './Action/Action';
import { Footer } from './Footer/Footer';
import {TitleSection} from './TitleSection/TitleSection';

function App() {
  return (
    <div class="app">
      <TitleSection />
      <Features />
      <Testinomials />
      <Press />
      <Pricing />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
