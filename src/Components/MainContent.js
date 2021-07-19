import litecoin from "../images/litecoin.PNG";
function MainContent() {
  return (
    <div className="h-screen" style={{ flex: "0.50" }}>
      <div className="flex w-full justify-center mt-10">
        <div className="w-3/4 relative">
          <input
            type="text"
            className="placeholder-gray-500 font-semibold bg-gray-100 px-16 py-3 focus:outline-none w-full rounded-full"
            placeholder="Search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute left-4 top-3 "
            viewBox="0 0 20 20"
            fill="gray"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="ml-36 mt-36 relative">
        <h1 className="text-5xl ">
          <span className="font-bold">Hi,</span> Mikey
        </h1>
        <div className="absolute text-white font-medium left-56 top-0 flex justify-center items-center -mt-6 -ml-5 h-10 w-10 bg-notificationRing rounded-full">
          <p>23</p>
        </div>
      </div>
      <div className="flex mt-16 space-x-10 w-full justify-center items-center">
        <div className="bg-bitcoinYellow rounded-xl p-6">
          <div className="flex justify-between items-center px-2 pt-2">
            <h3 className="font-bold">Bitcoin</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="#08009c"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </div>

          <svg
            height="95"
            className="opacity-60 my-7"
            viewBox="57.4 50 585 950"
            width="100"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m597.5 500c-12.9-17.1-28-32.2-45-45-12-9-25-16.9-38.8-23.4 5.4-6.8 10.3-14.1 14.6-21.6 15.4-26.5 24.1-57.2 24.1-90s-8.8-63.5-24.1-90c-15.8-27.3-38.6-50.1-65.9-65.9-14-8.1-29.1-14.3-45-18.5v-95.6h-90v90h-45v-90h-90v90h-135v90h45v540h-45v90h135v90h90v-90h45v90h90v-90c15.4 0 30.5-1.5 45-4.5 33.2-6.7 63.8-20.8 90-40.4 17-12.8 32.2-28 45-45 28.2-37.6 45-84.4 45-135s-16.7-97.5-44.9-135.1zm-405-270h180c16.4 0 31.8 4.4 45 12.1 26.9 15.5 45 44.6 45 77.9s-18.1 62.4-45 77.9c-13.2 7.7-28.6 12.1-45 12.1h-180zm270 532.3c-14.1 5-29.2 7.7-45 7.7h-225v-270h225c15.8 0 30.9 2.7 45 7.7 52.5 18.6 90 68.6 90 127.3s-37.5 108.8-90 127.3z" />
          </svg>
          <h4 className="text-boxPurple font-bold text-2xl">0.2231345 BTC</h4>
          <h6 className="text-boxPurple font-medium text-lg">11,032.24 USD</h6>
        </div>
        <div className="bg-ethereumPurple rounded-xl p-6">
          <div className="flex justify-between items-center px-2 pt-2">
            <h3 className="font-bold">Ethereum</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="#08009c"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </div>

          <svg
            fill="white"
            className="opacity-60 h-24 my-7"
            viewBox="0 0 1543 2499.2"
          >
            <title>e</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="svg8">
                <g id="layer5">
                  <g id="g1627">
                    <path
                      id="path1599"
                      class="cls-1"
                      d="M0,1361.05c271.87,144.38,555.56,295.51,774.67,412.45L1543,1361.05c-278.2,413.29-510,757.36-768.33,1138.15C515.88,2119.25,230.08,1700,0,1361.05Zm29.55-114L775.51,849l736.25,395.14L775.93,1642.63ZM774.67,721.47,0,1129.28,771.29,0,1543,1131.81,774.67,721.47Z"
                    />
                    <path
                      id="path1593"
                      class="cls-2"
                      d="M774.67,1773.5,1543,1361.05C1264.8,1774.34,774.67,2499.2,774.67,2499.2ZM775.51,849l736.25,395.14L775.93,1642.63,775.51,849Zm-.84-127.5L771.29,0,1543,1131.81Z"
                    />
                    <path
                      id="path1603"
                      class="cls-2"
                      d="M29.55,1247.06l746,61.22,736.25-63.75L775.93,1643.05Z"
                    />
                    <path
                      id="path1606"
                      class="cls-3"
                      d="M775.51,1308.28l736.25-63.75L775.93,1643.05l-.42-334.77Z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <h4 className="text-boxPurple font-bold text-2xl">10.612356 ETH</h4>
          <h6 className="text-boxPurple font-medium text-lg pb-0.5">
            1242.31 USD
          </h6>
        </div>
        <div className="bg-litecoinBlue rounded-xl p-6">
          <div className="flex justify-between items-center px-2 pt-2">
            <h3 className="font-bold">Litecoin</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="#08009c"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </div>

          <img
            src={litecoin}
            alt=""
            height={150}
            width={150}
            className="my-4 -ml-9 opacity-60"
          />

          <h4 className="text-boxPurple font-bold text-2xl">10.612356 ETH</h4>
          <h6 className="text-boxPurple font-medium text-lg pb-0.5">
            1242.31 USD
          </h6>
        </div>
      </div>
      <div className="mt-20 bg-gray-100 w-1/2 transform relative translate-x-56 h-3 rounded-full">
        <div className="h-3 bg-blue-700 absolute w-1/3 rounded-full left-40"></div>
      </div>
      <div className="mt-10 cursor-pointer flex justify-center items-center bg-white shadow-xl w-9 transform ml-16 relative translate-x-96 h-9 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex w-full justify-between items-center px-32">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold mb-2">Latest Activity</h2>
          <h4 className="text-gray-400 font-bold text-lg">
            Updated 12 minutes ago
          </h4>
        </div>
        <p className="underline text-gray-400 font-medium mt-12 -ml-40">edit</p>
        <div className="flex">
          <div className="h-12 w-12 flex justify-center items-center bg-gray-100 rounded-xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="h-12 w-12 ml-2 flex justify-center items-center bg-boxPurple rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-10 justify-center items-center">
        <div className="h-14 w-14 bg-blue-200 mr-6 rounded-xl"></div>
        <div className="flex flex-col mr-8">
          <h3 className="text-2xl font-bold">Insurance</h3>
          <h6 className="text-lg text-gray-500 font-semibold">
            Property Coverage
          </h6>
        </div>
        <div className="flex flex-col mr-8">
          <h3 className="text-2xl font-bold">LTC Wallet</h3>
          <h6 className="text-lg text-gray-500 font-semibold">
            Personal account
          </h6>
        </div>
        <div className="flex flex-col mr-8">
          <h3 className="text-2xl font-bold">7 Jun, 21</h3>
          <h6 className="text-lg text-gray-500 font-semibold">Last payment</h6>
        </div>
        <div className="flex flex-col mr-8">
          <h3 className="text-2xl font-bold">-10.24 LTC</h3>
          <h6 className="text-lg text-gray-500 font-semibold">Balance</h6>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
