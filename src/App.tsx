import Header from './components/Header'
import Background from './components/Background'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './styles/backgrounds.css';

function App() {
  return (
    <div >
      <Header />
      <main>
        <Background />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
