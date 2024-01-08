import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";
import { useState } from "react";

export default function Examples(){
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
    )
}