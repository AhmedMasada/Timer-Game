import Player from './components/Player'
import TimerChallenge from './components/TimerChallenge'

const App = () => {
  return (
    <>
    <header id="content">
      <h1>THE <em>ALMOST</em> FINAL COUNTDOWN</h1>
      <p>Stop the timer once you estimate that the time is (almost) up</p>
      <Player />
      <div id="challenges">
        <TimerChallenge title="too long" targetTime={15} />
        <TimerChallenge title="count like a clock" targetTime={10} />
        <TimerChallenge title="just pros" targetTime={5} />
        <TimerChallenge title="hard" targetTime={3} />
        <TimerChallenge title="not easy" targetTime={2} />
        <TimerChallenge title="easy" targetTime={1} />
      </div>
      </header>
    </>
  )
}

export default App