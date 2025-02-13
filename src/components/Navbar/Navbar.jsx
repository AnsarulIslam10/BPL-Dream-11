import PropTypes from "prop-types";
export default function Navbar({ coin }) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <img src="https://i.ibb.co.com/NCPgr7q/logo.png" alt="" />
      </div>

      <div>
        <div className=" hidden lg:flex">
          <ul className="flex gap-4 text-xl font-medium px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <a className="border px-6 py-3 rounded-xl shadow-sm font-bold flex items-center gap-2">
            <i className="fa-solid fa-dollar-sign text-yellow-500 text-xl"></i>{" "}
            {coin}
          </a>
        </div>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  coin: PropTypes.number,
};
