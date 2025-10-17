export default function PlayerCard({ player }) {
  return(
    <section className="stats">
      <h4>Resources Collected:</h4>  
      <div className="playerResources">                
        
        <div>
          <img src="wood.png" alt="wood"></img>
          <span>{player.wood}</span>
        </div>
        
        <div>
          <img src="stone.png" alt="stone"></img>
          <span>{player.stone}</span>
        </div>

        <div>
          <img src="iron.png" alt="iron"></img>
          <span>{player.iron}</span>
        </div>
       
        <div>
          <img src="gold.png" alt="bag of gold"></img>
          <span>{player.gold}</span>
        </div>
      </div>
     
        
    </section>
  )
}