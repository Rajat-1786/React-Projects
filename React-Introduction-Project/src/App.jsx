import { useState } from 'react';
import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import {CORE_CONCEPTS} from './data.js';
function App() {
  const [selectedButton,setSelectedButton] = useState('Please click on the button');
  

  function handleClick(selectedButton){
    setSelectedButton(selectedButton);
    // console.log(selectedButton);
  }

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
              title={CORE_CONCEPTS[2].title}
              description = {CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description = {CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleClick('components')}> Components </TabButton>
            <TabButton onSelect={()=>handleClick('jsx')}> JSX </TabButton>
            <TabButton onSelect={()=>handleClick('props')}> Props </TabButton>
            <TabButton onSelect={()=>handleClick('stats')}> Stats </TabButton>
          </menu>
          {selectedButton}
        </section>
      </main>
    </div>
  );
}

export default App;
