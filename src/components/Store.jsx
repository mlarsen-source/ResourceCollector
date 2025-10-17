export default function Store(props) {
    return(
        <>
            <section className="store">
                <p>Store:</p>
                <button onClick={()=> {props.addItem("shovel")}}>Buy Shovel (2x)- 10 gold </button>
                <button onClick={()=> {props.addItem("axe")}}>Buy Axe (4x)- 25 gold</button>
                <button onClick={()=> {props.addItem("hatchet")}}>Buy Hatchet (8x)- 100 gold</button>
            </section>
        </>
    )
}