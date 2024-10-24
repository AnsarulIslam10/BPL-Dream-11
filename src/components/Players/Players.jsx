import { useEffect } from "react";
import { useState } from "react";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [tab, setTab] = useState('available')
  useEffect(() => {
    fetch("./players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  console.log(setPlayers)

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Available Players</h2>

        <div className="border rounded-xl flex">
          <button onClick={() => setTab('available')} className={'px-4 rounded-tl-xl py-2 rounded-bl-xl duration-200 font-medium' + (tab === 'available' ? ' bg-[#E7FE29] text-black' : '')}>Available</button>

          <button onClick={() => setTab('selected')} className={'px-4 duration-200 py-2 rounded-tr-xl rounded-br-xl font-medium' + (tab === 'selected' ? ' bg-[#E7FE29] text-black' : '')} >Selectet (0)</button>
        </div>
      </div>

      {/* players card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
                <h3 className="text-lg font-semibold mb-3">Rating</h3>
                <div className="flex justify-between items-center text-xl mb-4">
                  <h3>{player.battingType}</h3>
                  <h3>{player.bowlingType}</h3>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <h3>Price: ${player.biddingPrice}</h3>
                  <button className="btn btn-outline border-gray-200">
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
