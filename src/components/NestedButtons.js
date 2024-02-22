
export default function NestedButtons() {
    //Create outter and inner buttons, stop propagation
    const handleOuttie = () => {
        alert('Outer button clicked!');
    }
    const handleInnie = (e) => {
        e.stopPropagation()
        alert("Clicked inner button")
    }

    return (
        <div>
            <button onClick={handleOuttie}> Outtie
                <button onClick={handleInnie} style={{margin:10}}> Innie</button>
            </button>
        </div>
    )

}