export default function Inventory(props){
  const inventoryList = props.player.inventory;
  let hasShovel = false;
  let hasAxe = false;
  let hasHatchet  = false;
  let hasPick  = false;
  
  if(inventoryList.includes("shovel")) {
      hasShovel = true;
  }
  if(inventoryList.includes("axe")) {
      hasAxe = true;
  }
  if(inventoryList.includes("hatchet")) {
      hasHatchet = true;
  }
    if(inventoryList.includes("pick")) {
      hasPick = true;
  }
  
  return(
    <section className="inventory">
      <h4>Player Inventory:</h4>
      <div className="inventoryItems">
        {hasHatchet? <img src="hatchet"/> : null}
        {hasAxe? <img src="axe"/> : null}
        {hasShovel? <img src="shovel"/> : null}       
        {hasPick? <img src="pick"/> : null}
      </div>  
    </section>
  )
}