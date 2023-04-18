import React from "react";
import { useState } from "react";
import PanelA from "./PanelA"
import PanelB from "./PanelB"

const Accordion = ()=> {
    const [activePanel, setActivePanel] = useState();

    const toggle =(num) =>{

        setActivePanel(num);
    }

return(<>
    <PanelA toggle={toggle}/>
    <PanelB/></>
    
)
}
export default Accordion;