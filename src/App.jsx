import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newslatter from "./components/Newslatter/Newslatter";
import Players from "./components/Players/Players";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { toast } from "react-toastify";

function App() {
  const [coin, setCoin] = useState(0);
  const [tab, setTab] = useState("available");
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleClaimFreeCredit = () => {
    setCoin(coin + 2000000);
    toast.success("Credit added to your account");
  };

  const AddSelectedPlayer = (player) => {
    const isExist = selectedPlayer.find(
      (previousPlayer) => previousPlayer.playerId === player.playerId
    );
    if (coin <= 0) {
      toast.error("Not enough money to buy this player! Claim some Credit");
    } else {
      if (!isExist) {
        if (selectedPlayer.length > 5) {
          toast.warning("You can only select 6 players");
        } else if (player.biddingPrice <= coin) {
          setSelectedPlayer([...selectedPlayer, player]);
          setCoin(coin - player.biddingPrice);
          toast.success(`Congrats !! ${player.name} added to your squad`);
        } else {
          toast.error("Not enough money to buy this player. Claim some Credit");
        }
      } else {
        toast.warning(`${player.name} already selected`);
      }
    }
  };

  const handleRemovePlayer = (id) => {
    const deletedPlayer = selectedPlayer.find(
      (player) => player.playerId === id
    );
    const updatedPlayers = selectedPlayer.filter(
      (player) => player.playerId !== id
    );

    setSelectedPlayer(updatedPlayers);
    setSelectedPlayers([...selectedPlayers, deletedPlayer]);

    toast.success("Player removed succesfully");
  };

  const toggle = (tab) => {
    setTab(tab);
  };

  const backToAvailable = () => {
    setTab("available");
  };

  return (
    <>
      <div className="w-11/12 m-auto">
        <Navbar coin={coin}></Navbar>
        <Hero handleClaimFreeCredit={handleClaimFreeCredit}></Hero>
        <div className="mt-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className=" sm:text-2xl font-bold">
              {tab === "available"
                ? "Available Players"
                : `Selected players (${selectedPlayer.length}/6)`}
            </h2>

            <div className="border rounded-xl flex">
              <button
                onClick={() => setTab("available")}
                className={
                  "px-2 py-2 sm:px-4 rounded-tl-xl sm:py-2 rounded-bl-xl duration-200 text-xs font-medium" +
                  (tab === "available" ? " bg-[#E7FE29] text-black" : "")
                }
              >
                Available
              </button>

              <button
                onClick={() => setTab("selected")}
                className={
                  "px-2 py-2 sm:px-4 duration-200 sm:py-2 rounded-tr-xl rounded-br-xl text-xs font-medium" +
                  (tab === "selected" ? " bg-[#E7FE29] text-black" : "")
                }
              >
                Selected ({selectedPlayer.length})
              </button>
            </div>
          </div>
        </div>
        {tab === "available" ? (
          <Players AddSelectedPlayer={AddSelectedPlayer}></Players>
        ) : (
          <SelectedPlayers
            selectedPlayer={selectedPlayer}
            handleRemovePlayer={handleRemovePlayer}
            backToAvailable={backToAvailable}
            toggle={toggle}
          ></SelectedPlayers>
        )}
        <Newslatter></Newslatter>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
