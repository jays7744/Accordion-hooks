
 const PanelA = ({toggle,activePanel}) => {
    
    return(
    <div>
        <h2> Panel A</h2>
    <button onClick={()=>toggle(1) }>Click</button>

    {activePanel === 1 && (<p>This Is Panel A</p> 
    )}


    </div>
    
    
        
    )
   
}
export default PanelA;