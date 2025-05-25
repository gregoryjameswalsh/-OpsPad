import logo from './logo.svg';
import './App.css';
// import './output.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard';

function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        
        <Hero></Hero>
        <FeatureCard></FeatureCard>
       
      </header>
      <div className="App-footer">
        <Footer></Footer>
        </div>
    </div>
    
  );
}

export default App;
