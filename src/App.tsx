import Header from './components/Header'
import Background from './components/Background'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './styles/backgrounds.css';

function App() {
  return (
    <div >
      <Header />
      <main>
        <Background />
        <About />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
