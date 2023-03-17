import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { Catalog } from "./components/Catalog/Catalog";
import { useEffect, useState } from "react";
import * as gamesAction from './services/gamesService'
import { GameDetails } from "./components/GameDetails/GameDetails";
function App() {
  const [games, setGames] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    gamesAction.getAll()
      .then(res =>

        setGames(res)
      )
  }, [])


  const onCreateGameSubmit = async (data) => {
    console.log(data);
    const newGame = await gamesAction.create(data)
    setGames(state => [...state, newGame])
    navigate('/catalog')
  }


  return (

    <div id="box">
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/catalog" element={<Catalog games={games}></Catalog>}></Route>
          <Route path="/create" element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} ></CreateGame>}></Route>
          <Route path="/catalog/:gameId" element={<GameDetails ></GameDetails>}></Route>

        </Routes>
      </main>
    </div>

  );
}

export default App;
