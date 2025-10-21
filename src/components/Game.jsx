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
    wMultiplier: 3,
    stone: 0,
    sMultiplier: 2,
    iron: 0,
    iMultiplier :1,
    gold: 0,
   
    inventory: [],
  });

  React.useEffect(() => {
    setPlayer(prevState => {
      let wMultiplier = 3
      let sMultiplier = 2
      let iMultiplier = 1

      if (prevState.inventory.includes("hatchet")) wMultiplier = 6
      if (prevState.inventory.includes("axe")) wMultiplier = 12
      if (prevState.inventory.includes("shovel")) sMultiplier = 4
      if (prevState.inventory.includes("pick")) iMultiplier = 2

      return {
        ...prevState,
        wMultiplier,
        sMultiplier,
        iMultiplier
      }
    })
  }, [player.inventory])

  function updateWood() {
    setPlayer(prevState => ({
      ...prevState,
      wood: prevState.wood + prevState.wMultiplier
    }))
  }

  function updateStone() {
    setPlayer(prevState => ({
      ...prevState,
      stone: prevState.stone + prevState.sMultiplier
    }))
  }

  function updateIron() {
    setPlayer(prevState => ({
      ...prevState,
      iron: prevState.iron + prevState.iMultiplier
    }))
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
            <p>{player.wMultiplier} x</p>
            <img src="wood.png" alt="wood" draggable="false"></img>
            <p>Wood</p>
            <div className="exchangeRate">
              <p>8 wood = 1 gold</p>
            </div>
          </div>
          <div className="imageBox" onClick={updateStone} >
             <p>{player.sMultiplier} x</p> 
            <img src="stone.png" alt="stone" draggable="false"></img>
            <p>Stone</p>
              <div className="exchangeRate">
              <p>4 Stone = 1 gold</p>
            </div>
          </div>
          <div className="imageBox"onClick={updateIron} >
            <p>{player.iMultiplier} x</p> 
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