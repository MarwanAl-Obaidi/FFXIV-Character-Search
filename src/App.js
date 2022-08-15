import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});

  function searchForPlayer(event) {
    //console.log("Hello");
    var APICallString = "https://xivapi.com/character/search?name=" + searchText
    axios.get(APICallString).then(function(response) {
      setPlayerData(response.data);
    }).catch(function(error) {
      console.log(error);
    });
  }

  console.log(playerData);

  return (
    <div className="App">
      <div className='conatainer'>
        <h5>FFXIV Player Search</h5>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer(e)}>Search for player</button>
      </div>
      {JSON.stringify(playerData) != '{}' ?
        <>
          <p>{<img src={playerData.Results[0].Avatar}/>}</p>
        </>
        :
        <><p>No player data</p></>
      }
    </div>
  );
}

export default App;
