import { useEffect } from "react";
import { useState } from "react";

export default function Players() {
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('./players.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Available Players</h2>

        <div className="px-4 py-2 border rounded-xl flex gap-2">
          <button className="">Available</button>
          <button className="">Selectet (0)</button>
        </div>
      </div>

      {/* players card */}

    </div>
  );
}
