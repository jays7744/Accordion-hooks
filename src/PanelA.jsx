
const PanelA = ({ toggle, activePanel }) => {

    return (
        <div>
            <h2> Panel A</h2>

            {activePanel === 1 && (<p>This Is Panel A</p>
            )}
            
            <button onClick={() => toggle(activePanel === 1 ? 0 : 1)}>Toggle</button>

        </div>  )

}
export default PanelA;