import Form from "./components/Form"
import GameHistory from "./components/GameHistory"
import "./App.css";
import { useState } from "react";

const formOptionsInitialState = [
  {
    header: "Board Size: ",
    className: "boardSize",
    options: ['3', '6', '9']
  },
  {
    header: "Play As: ",
    className: "playAs",
    options: ["X", "O"]
  },
  {
    header: "Opponent: ",
    className: "opponent",
    options: ["Multi-player", "Computer"]
  }
];

function App() {
  const [option, setOption] = useState(formOptionsInitialState);

  return (
    <div className="App">

      <section className="GameSubmissionFormContainer">
        <h3>New Game:</h3>
        <div>
          <h5>Enter Username: </h5>
          <input className="username"></input>
        </div>
          <form className="NewGameForm">
            {option.map((o, pos) => (
              <Form
                id = {o.id}
                header = {o.header}
                class = {o.class}
                options = {o.options}
                key = {pos}          
              />
            ))}
           </form>
        <button className="form-submit">+ New Game</button>
      </section>
      <section className="GameHistoryContainer">
        <h3>Game History</h3>
          <GameHistory/>
      </section>
    </div>
  );
}

export default App;
