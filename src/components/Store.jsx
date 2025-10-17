export default function Store(props) {
  return (
    <section className="store">
      <h4>Store:</h4>

      <div>
        <img src="coins.png" alt="coins" draggable="false" />
        <button id="xButton" onClick={props.exchangeResources}>Exchange Resources</button>
      </div>

      <div>
        <img src="hatchet.png" alt="hatchet" draggable="false" />
        <button onClick={() => props.buyItem("hatchet", 10)}>
          Buy Hatchet (10 gold)
        </button>
      </div>

      <div>
        <img src="axe.png" alt="axe" draggable="false" />
        <button onClick={() => props.buyItem("axe", 50)}>
          Buy Axe (50 gold)
        </button>
      </div>

      <div>
        <img src="shovel.png" alt="shovel" draggable="false" />
        <button onClick={() => props.buyItem("shovel", 100)}>
          Buy Shovel (100 gold)
        </button>
      </div>

      <div>
        <img src="pick.png" alt="pick" draggable="false" />
        <button onClick={() => props.buyItem("pick", 200)}>
          Buy Pick (200 gold)
        </button>
      </div>
    </section>
  );
}