import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";
export default function CoreConcepts(){
    return (
        <Section title="CoreConcepts" id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((arrItem) => (<CoreConcept item={arrItem}/>))}
          </ul>
        </Section>
    )
}