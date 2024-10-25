import { useEffect } from "react";
import { useState } from "react";

export default function SelectedPlayers({selectedPlayer}) {
  const [players, setPlayers] = useState([]);
  const [tab, setTab] = useState("selected");
  useEffect(() => {
    fetch("./players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="mt-6">
      {/* players card */}
      <div>
        {
          selectedPlayer.map((player, idx) => <div key={idx} className="flex justify-between px-4 py-4 border rounded-xl mt-4">
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
          <button>
            <i className="fa-solid fa-trash text-2xl text-red-500"></i>
          </button>
        </div>
        )}
    </div>
    </div>
  );
}
