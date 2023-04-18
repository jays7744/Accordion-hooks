import { useState } from "react";


 const PanelA = (props) => {

    return(<>
    <p>This is Panel A</p>
    <button onClick={props.toggle}>Click</button>
    </>
        
    )
   
}
export default PanelA;