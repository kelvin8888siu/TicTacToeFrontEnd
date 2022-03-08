import React, { useState , useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const apiUrl = "/game/"


export default function GameHistory() {
    const [username, setName] = useState('');
    const [rows, setTable] = useState(null);

    let headers = new Headers();

    useEffect(() => {
        fetch(`/player/${username}`)
        .then(resp => resp.json())
        .then(json => fetch(`/game/${json}`).then(response => response.json())
        .then(data => setTable(data.map((item) => <tr scope="row"><td>{item.game_status}</td><td>{item.game_size}</td><td>{item.player_one_piece}</td></tr>))))}, [username]); 

    function handleChange(e) {
        setName(e.target.value);
    }

  return (
    <div>
        <div>
            <h5>Enter Username: </h5>
            <input className="username" onChange={handleChange}></input>
        </div>
        <table className="table table-dark">
        <thead>
            <tr>
                <th scope="col">Game Status</th>
                <th scope="col">Game Size</th>
                <th scope="col">Piece Chosen By User</th>
            </tr>
        </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
  )
}
