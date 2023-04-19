
const PanelB = ({toggle,activePanel}) => {


    return(<>
        <h2>Panel B</h2>
        <button onClick={()=>toggle(2)}>Click</button>

        {activePanel === 2 && (<p>This is Panel B</p>
        )}
        
        </>
    )
   
}
export default PanelB; 