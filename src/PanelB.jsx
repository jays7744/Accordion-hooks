
const PanelB = ({toggle,activePanel}) => {


    return (<>
        <h2>Panel B</h2>

        {activePanel === 2 && (<p>This is Panel B</p> )}

        <button onClick={() => toggle(activePanel === 2 ? 0 : 2)}>Toggle</button>
    </>)

}
export default PanelB; 