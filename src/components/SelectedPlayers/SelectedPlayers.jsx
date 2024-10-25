import { useEffect } from "react";
import { useState } from "react";

export default function SelectedPlayers() {
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
        <div className="flex justify-between px-4 py-4 border rounded-xl mt-4">
          <div className="flex items-center gap-2">
            <img
              className="w-16 h-16 object-cover rounded-xl"
              src="https://i.ibb.co.com/jb7gv4X/shakib.jpg"
              alt=""
            />
            <div>
              <h2 className="text-xl font-semibold">name</h2>
              <p className="text-gray-500">Bating</p>
            </div>
          </div>
          <button>
            <i className="fa-solid fa-trash text-2xl text-red-500"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
