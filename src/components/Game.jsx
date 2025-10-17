import PlayerCard from "./PlayerCard.jsx"
import Store from "./Store.jsx"
import Inventory from "./Inventory.jsx";
import React from 'react'

export default function Game() {
  
  const [player, setPlayer] = React.useState({
    wood: 0,
    stone: 0,
    iron: 0,
    gold: 0,
    inventory: []
  });

  function updateWood() 
  {
    let multiplier = 1

    if (player.inventory.includes("shovel")) {
      multiplier=2
    }
    
    setPlayer(prevState => ({
      ...prevState,      
      wood: prevState.wood + 4 * multiplier
    }));
  }

  function updateStone() {
    setPlayer(prevState => ({
      ...prevState,      
      stone: prevState.stone + 2  
    }));
  }

   function updateIron() {
    setPlayer(prevState => ({
      ...prevState,      
      iron: prevState.iron + 1  
    }));
  }

  function addItem(item) {
    setPlayer(prevState => ({
      ...prevState,      
      inventory: [...prevState.inventory, item] 
    }));
    console.log(player.inventory)
  }


  return (
    <>
      <div className="game">
        < PlayerCard player={player}/>
        <section className="gameBoard">
          <div className="imageBox" onClick={updateWood} > 
            <img src="wood.png" alt="wood" draggable="false"></img>
            <p>Wood</p>
          </div>
          <div className="imageBox" onClick={updateStone} > 
            <img src="stone.png" alt="stone" draggable="false"></img>
            <p>Stone</p>
          </div>
          <div className="imageBox"onClick={updateIron} > 
            <img src="iron.png" alt="stone" draggable="false"></img>
            <p>Iron</p>
          </div>
        </section>
        <Inventory 
          inventory={player.inventory} 
        />
      </div>
      <Store addItem={addItem}/>
    </>
  )
}