import PlayerCard from "./PlayerCard.jsx"
import Store from "./Store.jsx"

export default function Game() {
  
  return (
    <>
      < PlayerCard />

      <main> 
        <img onClick src="https://png.pngtree.com/png-vector/20240327/ourmid/pngtree-quirky-retro-style-cartoon-wooden-log-png-image_12215791.png"></img>
        <p>Wood</p>
        <img onClick src="https://cdn.creazilla.com/cliparts/3152335/stone-clipart-xl.png"></img>
        <p>Stone</p>
        <img onClick src="https://www.clipartmax.com/png/middle/89-893353_iron-and-steel-clip-art.png"></img>
        <p>Iron</p>
      </main>

      <h1>This is the game</h1>

      <Store />
    </>
  )
}