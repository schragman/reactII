import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import { useState } from 'react'


export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    console.log("Button selected: " + selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic</p>;
  const JSX = 'jsx';
  const COMPONENTS = 'components';
  const PROPS = 'props';
  const STATE = 'state';

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
                      <code>
                          {EXAMPLES[selectedTopic].code}
                      </code>
                  </pre>
      </div>
    );
  }
  <section id="examples">
    <h2>Examples</h2>
    <menu>
      <TabButton onSelect={() => handleSelect(COMPONENTS)}
                 isSelected={selectedTopic === COMPONENTS}>Components</TabButton>
      <TabButton onSelect={() => handleSelect(JSX)}
                 isSelected={selectedTopic === JSX}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect(PROPS)}
                 isSelected={selectedTopic === PROPS}>PROPS</TabButton>
      <TabButton onSelect={() => handleSelect(STATE)}
                 isSelected={selectedTopic === STATE}>STATE</TabButton>
    </menu>
  </section>
  {tabContent}
};