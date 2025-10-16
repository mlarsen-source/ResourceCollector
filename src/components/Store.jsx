export default function Store(props) {
    return(
        <>
            <section className="store">
                <p>Store:</p>
                <button onClick={props.addShovel}>Buy Shovel (2x)- 10 gold </button>
                <button>Buy Axe (4x)- 25 gold</button>
                <button>Buy Hatchet (8x)- 100 gold</button>
            </section>
        </>
    )
}