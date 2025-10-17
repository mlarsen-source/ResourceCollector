import PlayerCard from "./PlayerCard.jsx"
import Store from "./Store.jsx"
import Inventory from "./Inventory.jsx";
import React from 'react'

/*
Basic Gameplay:

3x Wood per Click
6x Wood per Click with Hatchet
12x Wood per click with Axe
8x Wood = 1 Gold
Hatchet Cost =10 Gold
Axe Cost = 50 Gold

2x Stone per Click
4x Stone per Click with Shovel
4 Stone = 1 Gold
Shovel Cost = 100 Gold

1x Iron per Click
2x Iron per Click with Pick
2 Iron = 1 Gold
Pick cost = 200 gold

*/

export default function Game() {
  
  const [player, setPlayer] = React.useState({
    wood: 0,
    stone: 0,
    iron: 0,
    gold: 0,
    inventory: [],
  });

  function updateWood() {
    
    let multiplier = 1

    if (player.inventory.includes("hatchet")) {
      multiplier=2
    }

    if (player.inventory.includes("axe")) {
      multiplier=4
    }
    
    setPlayer(prevState => ({
      ...prevState,      
      wood: prevState.wood + 3 * multiplier
    }));
  }

  function updateStone() {
    let multiplier = 1;

    if (player.inventory.includes("shovel")) {
      multiplier = 2
    }
    setPlayer(prevState => ({
      ...prevState,      
      stone: prevState.stone + 2 * multiplier  
    }));
  }

   function updateIron() {
    let multiplier = 1
    
    if (player.inventory.includes("shovel")) {
      multiplier = 2
    }
    setPlayer(prevState => ({
      ...prevState,      
      iron: prevState.iron + 1 * multiplier 
    }));
  }

  function exchangeResources() {
    setPlayer(prevState => {
      const woodGold = Math.floor(prevState.wood / 8);
      const stoneGold = Math.floor(prevState.stone / 4);
      const ironGold = Math.floor(prevState.iron / 2);

      const totalGold = woodGold + stoneGold + ironGold;

      return {
        ...prevState,
        wood: prevState.wood - woodGold * 8,
        stone: prevState.stone - stoneGold * 4,
        iron: prevState.iron - ironGold * 2,
        gold: prevState.gold + totalGold
    }});
  }

  function buyItem(item, cost) {
    setPlayer(prevState => {
      if (prevState.gold < cost) {
        alert(`Not enough gold! You need ${cost} gold to buy ${item}.`);
        return prevState;
      }

      if (prevState.inventory.includes(item)) {
        alert(`You already own ${item}.`);
        return prevState;
      }

      return {
        ...prevState,
        gold: prevState.gold - cost,
        inventory: [...prevState.inventory, item]
      }});
  }

  return (
    <>
      <div className="game">
        < PlayerCard player={player}/>
        <section className="gameBoard">
          <div className="imageBox" onClick={updateWood} > 
            <img src="wood.png" alt="wood" draggable="false"></img>
            <p>Wood</p>
            <div className="exchangeRate">
              <p>8 wood = 1 gold</p>
            </div>
          </div>
          <div className="imageBox" onClick={updateStone} > 
            <img src="stone.png" alt="stone" draggable="false"></img>
            <p>Stone</p>
              <div className="exchangeRate">
              <p>4 Stone = 1 gold</p>
            </div>
          </div>
          <div className="imageBox"onClick={updateIron} > 
            <img src="iron.png" alt="stone" draggable="false"></img>
            <p>Iron</p>
              <div className="exchangeRate">
              <p>2 Iron = 1 gold</p>
            </div>
          </div>
        </section>
        <Inventory 
          player={player} 
        />
      </div>
      <Store 
        buyItem={buyItem}
        exchangeResources ={exchangeResources}
      />
    </>
  )
}