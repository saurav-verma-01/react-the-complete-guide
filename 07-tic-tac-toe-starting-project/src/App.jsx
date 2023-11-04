import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 01" symbol="X" />
          <Player name="Player 02" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG RESULTS
    </main>
  );
}

export default App;
