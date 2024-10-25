import { useEffect } from "react";
import { useState } from "react";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

export default function Players({AddSelectedPlayer}) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("./players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);


  
  return (
    <div className="mt-6">
      {/* players card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4" >
        {
         players.map((player) => (
          <div
            key={player.playerId}
            className="card bg-base-100 shadow-xl"
          >
            <figure className="px-10 pt-10 h-72">
              <img
                src={player.image}
                alt="Shoes"
                className="rounded-xl w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-user text-xl"></i>
                <h2 className="card-title">{player.name}</h2>
              </div>
              <div className="flex items-center justify-between pb-2 border-b-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <i className="fa-solid fa-flag"></i>
                  <h3>{player.country}</h3>
                </div>
                <h3 className="px-4 py-2 bg-gray-200 rounded-xl">{player.role}</h3>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Rating: <span className="text-yellow-500">{player.rating}</span></h3>
                <div className="flex justify-between items-center mb-4 font-semibold gap-4">
                  <h3>{player.battingType}</h3>
                  <h3>{player.bowlingType}</h3>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Price: ${player.biddingPrice}</h3>
                  <button onClick={()=>AddSelectedPlayer(player)} className="btn btn-outline font-normal border-gray-200">
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
