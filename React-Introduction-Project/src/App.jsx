import { useState } from 'react';
import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import {CORE_CONCEPTS,EXAMPLES} from './data.js';
function App() {
  const [selectedButton,setSelectedButton] = useState();
  

  function handleClick(selectedButton){
    setSelectedButton(selectedButton);
    // console.log(selectedButton);
  }

  let tabContent = <p>please select a topic!</p>

  if(selectedButton){
    tabContent = (<div id="tab-content"> 
    <h3>{EXAMPLES[selectedButton].title}</h3>
    <p>{EXAMPLES[selectedButton].description}</p>
    <pre>
      <code>{EXAMPLES[selectedButton].code}</code>
    </pre>
  </div>);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((arrItem) => (<CoreConcept item={arrItem}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedButton === 'components'} 
            onSelect={()=>handleClick('components')}
            > Components </TabButton>
            <TabButton isSelected={selectedButton === 'jsx'} onSelect={()=>handleClick('jsx')}> JSX </TabButton>
            <TabButton isSelected={selectedButton === 'props'} onSelect={()=>handleClick('props')}> Props </TabButton>
            <TabButton isSelected={selectedButton === 'stats'} onSelect={()=>handleClick('stats')}> State </TabButton>
          </menu>
          {tabContent} 
        </section>
      </main>
    </div>
  );
}

export default App;
