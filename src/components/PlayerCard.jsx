export default function PlayerCard({ player }) {
    return(
        <>
            <section className="stats">
                <p>Your Stats:</p>
                <p>Currency: {player.gold} Gold</p>
                <p>Wood: {player.wood}</p>
                <p>Stone: {player.stone}</p>
                <p>Iron: {player.iron}</p>
            </section>
        </>
    )
}