import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import {CORE_CONCEPTS} from './data.js';
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description = {CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description = {CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description = {CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>Stats</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
