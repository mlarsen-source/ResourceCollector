import PlayerCard from "./PlayerCard.jsx"
import Store from "./Store.jsx"
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
      < PlayerCard player={player}/>
      <main> 
        <img onClick={updateWood} src="https://png.pngtree.com/png-vector/20240327/ourmid/pngtree-quirky-retro-style-cartoon-wooden-log-png-image_12215791.png"></img>
        <p>Wood</p>
        <img onClick={updateStone} src="https://cdn.creazilla.com/cliparts/3152335/stone-clipart-xl.png"></img>
        <p>Stone</p>
        <img onClick={updateIron} src="https://www.clipartmax.com/png/middle/89-893353_iron-and-steel-clip-art.png"></img>
        <p>Iron</p>
      </main>

      <h1>This is the game</h1>

      <Store addItem={addItem}/>
    </>
  )
}