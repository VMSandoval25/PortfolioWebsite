import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './styles/backgrounds.css';

function App() {
  return (
    <div className="night-sky text-white min-h-screen">
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
