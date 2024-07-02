import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [setState, selectedSetState] = useState("");

  function handleSelect(selectedButton) {
    selectedSetState(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = "Please select a tab!";

  if (setState) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[setState].title}</h3>
        <p>{EXAMPLES[setState].description}</p>
        <pre>
          <code>{EXAMPLES[setState].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        content={
          <>
            <TabButton
              isSelected={setState === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={setState === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={setState === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={setState === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
