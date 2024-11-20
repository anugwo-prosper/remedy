import HeroSection from './component/HeroSection.jsx';
import Section from './component/Section.jsx';
import Body from './component/Body.jsx';
import StatsSection from './component/StatsSection.jsx'
import Container from './component/HeroContainer.jsx'
import Employee from './component/Employee.jsx';
import TestimonialsSection from './component/TestimonialsSection.jsx';
import Footer from './component/Footer.jsx';
function App() {
  return (
    <div>
      <HeroSection />
      <Section />
      <Body/>
      <StatsSection />
      <Container/>
      <Employee/>
      <Footer/>
      {/* <TestimonialsSection/> */}
    </div>
  );
}

export default App;
