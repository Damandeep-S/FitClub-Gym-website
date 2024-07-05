import './App.css';
import Footer from './components/Footer';
import Join from './components/Join';
import Landing from './components/Landing';
import Plans from './components/Plans';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
      <Landing/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
