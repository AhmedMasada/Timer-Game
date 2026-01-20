import { useState, useRef } from "react"

const Player = () => {
    const [inputVlaue, setInputValue] = useState(null);
    const playerName = useRef();

    const handlePlayerName = () => {
        setInputValue(playerName.current.value);
        playerName.current.value = ''
    }
  return (
    <section id="player">
      <h2>Welcome {inputVlaue ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handlePlayerName}>Set Name</button>
      </p>
    </section>
  )
}

export default Player