import PropTypes from "prop-types";
export default function SelectedPlayers({
  selectedPlayer,
  handleRemovePlayer,
  toggle,
}) {
  return (
    <div className="mt-6">
      <div>
        {selectedPlayer.map((player, idx) => (
          <div
            key={idx}
            className="flex justify-between px-6 py-4 border rounded-xl mt-4"
          >
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 object-cover rounded-xl"
                src={player.image}
                alt=""
              />
              <div>
                <h2 className="text-xl font-semibold">{player.name}</h2>
                <p className="text-gray-500">{player.role}</p>
                <p className="text-gray-700 font-medium">
                  ${player.biddingPrice}
                </p>
              </div>
            </div>
            <button onClick={() => handleRemovePlayer(player.playerId)}>
              <i className="fa-solid fa-trash text-2xl text-red-400 hover:text-red-500"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="p-1 border-2 rounded-xl border-[#E7FE29] inline-block mt-4">
        <button
          onClick={() => toggle("available")}
          className="btn bg-[#E7FE29] font-bold hover:bg-[#c9db2e]"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
}

SelectedPlayers.propTypes = {
  selectedPlayer: PropTypes.array,
  handleRemovePlayer: PropTypes.func,
  toggle: PropTypes.func,
};
