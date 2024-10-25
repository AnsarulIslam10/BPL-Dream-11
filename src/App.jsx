import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newslatter from "./components/Newslatter/Newslatter";
import Players from "./components/Players/Players";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

function App() {
  const [coin, setCoin] = useState(0);
  const [tab, setTab] = useState("available");
  const [selectedPlayer, setSelectedPlayer] = useState([])

  const AddSelectedPlayer = (player) =>{
    const isExist = selectedPlayer.find(previousPlayer => previousPlayer.playerId === player.playerId)
    if (!isExist) {
      setSelectedPlayer([...selectedPlayer, player])
    }else{
      alert('player already selected');
    }
  }


  const toggle = () => {
    if (tab === "selected") {
      <SelectedPlayers></SelectedPlayers>;
    }
  };

  const handleClaimFreeCredit = () => {
    setCoin(coin + 10000000);
  };

  return (
    <>
      <div className="w-11/12 m-auto">
        <Navbar coin={coin}></Navbar>
        <Hero handleClaimFreeCredit={handleClaimFreeCredit}></Hero>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{tab === 'available'? 'Available Players' : 'Selected players (0/6)'}</h2>

            <div className="border rounded-xl flex">
              <button
                onClick={() => {
                  setTab("available"), toggle;
                }}
                className={
                  "px-4 rounded-tl-xl py-2 rounded-bl-xl duration-200 font-medium" +
                  (tab === "available" ? " bg-[#E7FE29] text-black" : "")
                }
              >
                Available
              </button>

              <button
                onClick={() => {
                  setTab("selected"), toggle;
                }}
                className={
                  "px-4 duration-200 py-2 rounded-tr-xl rounded-br-xl font-medium" +
                  (tab === "selected" ? " bg-[#E7FE29] text-black" : "")
                }
              >
                Selectet (0)
              </button>
            </div>
          </div>
        </div>
        {tab === 'available'? <Players AddSelectedPlayer={AddSelectedPlayer}></Players> : <SelectedPlayers selectedPlayer={selectedPlayer}></SelectedPlayers>}
        <Newslatter></Newslatter>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
