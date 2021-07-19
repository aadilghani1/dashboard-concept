import gndLogo from "../images/gnd img.png";
import squares from "../images/squares.png";

function LeftSideBar() {
  return (
    <div
      className="bg-leftBackground relative h-screen"
      style={{ flex: "0.25" }}
    >
      <div className="flex items-center justify-center font-semibold text-4xl">
        <img src={gndLogo} alt="" height={100} width={100} />
        <h1>GND CRYP</h1>
      </div>
      <div className="flex  items-center justify-evenly mt-10">
        <div className="h-20 relative w-20 bg-boxPurple flex shadow-xl items-center justify-center rounded-xl cursor-pointer">
          <img src={squares} alt="" height={50} width={50} />
          <p className="absolute bottom-0 -mb-7 font-bold">Dashboard</p>
        </div>

        <div className="relative cursor-pointer h-20 w-20 flex justify-center shadow-sm items-center bg-boxGray rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11 "
            viewBox="0 0 20 20"
            fill="#565758"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
              clipRule="evenodd"
            />
          </svg>
          <p className="absolute bottom-0 -mb-7 text-gray-500">Calculator</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly mt-12">
        <div className="relative cursor-pointer h-20 w-20 flex justify-center shadow-sm items-center bg-boxGray rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11"
            viewBox="0 0 20 20"
            fill="#565758"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
              fillRule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="absolute bottom-0 -mb-7 text-gray-500">Wallets</p>
        </div>

        <div className="relative cursor-pointer h-20 w-20 flex justify-center shadow-sm items-center bg-boxGray rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11"
            viewBox="0 0 20 20"
            fill="#565758"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="absolute bottom-0 -mb-7 text-gray-500">Savings</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly mt-12">
        <div className="relative cursor-pointer h-20 w-20 flex justify-center shadow-sm items-center bg-boxGray rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11"
            viewBox="0 0 20 20"
            fill="#565758"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
          <p className="absolute bottom-0 -mb-7 text-gray-500">Currencies</p>
        </div>

        <div className="relative cursor-pointer h-20 w-20 flex justify-center shadow-sm items-center bg-boxGray rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11"
            viewBox="0 0 20 20"
            fill="#565758"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
          <p className="absolute bottom-0 -mb-7 text-gray-500">Expenses</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly mt-32">
        <div className="relative cursor-pointer h-20 w-20 flex justify-center shadow-sm items-center bg-boxGray rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11"
            viewBox="0 0 20 20"
            fill="#565758"
          >
            <path
              fillRule="evenodd"
              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
              clipRule="evenodd"
            />
          </svg>
          <p className="absolute bottom-0 -mb-7 text-gray-500">Upcoming</p>
        </div>

        <div className="relative cursor-pointer h-20 w-20 flex justify-center shadow-sm items-center bg-boxGray rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11"
            viewBox="0 0 20 20"
            fill="#565758"
          >
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
          <p className="absolute bottom-0 -mb-7 text-gray-500">Food</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly mt-12">
        <div className="relative cursor-pointer h-20 w-20 flex justify-center shadow-sm items-center bg-boxGray rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11"
            viewBox="0 0 20 20"
            fill="#565758"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <p className="absolute bottom-0 -mb-7 text-gray-500">Health</p>
        </div>

        <div className="relative cursor-pointer h-20 w-20 flex justify-center shadow-sm items-center bg-boxGray rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11"
            viewBox="0 0 20 20"
            fill="#565758"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <p className="absolute bottom-0 -mb-7 text-gray-500">Account</p>
        </div>
      </div>
      <div className="h-32 w-48 absolute flex flex-col justify-center items-center bg-opacity-50 rounded-xl bottom-0 left-36 bg-boxPurple">
        <button className="text-blue-400 bg-white rounded-xl px-3 font-medium py-2">
          Get Pro Now
        </button>
      </div>
    </div>
  );
}

export default LeftSideBar;
