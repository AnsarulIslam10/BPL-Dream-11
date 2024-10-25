import { useEffect } from "react";
import { useState } from "react";

export default function SelectedPlayers({
  selectedPlayer,
  handleRemovePlayer,
  tab
}) {
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    fetch("./players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="mt-6">
      {/* players card */}
      <div>
        {selectedPlayer.map((player, idx) => (
          <div
            key={idx}
            className="flex justify-between px-4 py-4 border rounded-xl mt-4"
          >
            <div className="flex items-center gap-2">
              <img
                className="w-16 h-16 object-cover rounded-xl"
                src={player.image}
                alt=""
              />
              <div>
                <h2 className="text-xl font-semibold">{player.name}</h2>
                <p className="text-gray-500">{player.role}</p>
              </div>
            </div>
            <button onClick={() => handleRemovePlayer(player.playerId)}>
              <i className="fa-solid fa-trash text-2xl text-red-500"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="p-1 border-2 rounded-xl border-[#E7FE29] inline-block">
        <button onClick={()=> tab = 'available'}
          className="btn bg-[#E7FE29] font-bold hover:bg-[#c9db2e]"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
}
