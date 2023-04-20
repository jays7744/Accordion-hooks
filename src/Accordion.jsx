import React from "react";
import { useState } from "react";
import PanelA from "./PanelA"
import PanelB from "./PanelB"

const Accordion = ()=> {
    const [activePanel, setActivePanel] = useState(0);

    const toggle =(E) =>{

        setActivePanel(E);
        console.log(setActivePanel(E))
        // E.value.target === activePanel
    }

return(<>
    <PanelA toggle={toggle} activePanel={activePanel }/>
    <PanelB toggle={toggle} activePanel={activePanel}/>
    </>
    
)
}
export default Accordion;