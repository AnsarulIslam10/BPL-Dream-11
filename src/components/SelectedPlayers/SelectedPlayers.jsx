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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Selected Player (0/6)</h2>

        <div className="border rounded-xl flex">
          <button
            onClick={() => setTab("available")}
            className={
              "px-4 rounded-tl-xl py-2 rounded-bl-xl duration-200 font-medium" +
              (tab === "available" ? " bg-[#E7FE29] text-black" : "")
            }
          >
            Available
          </button>

          <button
            onClick={() => setTab("selected")}
            className={
              "px-4 duration-200 py-2 rounded-tr-xl rounded-br-xl font-medium" +
              (tab === "selected" ? " bg-[#E7FE29] text-black" : "")
            }
          >
            Selectet (0)
          </button>
        </div>
      </div>

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
