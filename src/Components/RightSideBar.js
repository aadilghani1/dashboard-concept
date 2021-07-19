function RightSideBar() {
  return (
    <div className="bg-RightBackground" style={{ flex: "0.25" }}>
      <div className="mt-8 flex font-semibold text-gray-500 items-center text-xl justify-evenly">
        <h3 className="cursor-pointer">Quit</h3>
        <h3 className="cursor-pointer">Personal</h3>
        <div className="bg-yellow-500 h-14 w-14 flex justify-center items-center rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex mt-20 items-center w-full justify-between px-20">
        <h1 className="font-bold text-4xl cursor-pointer">Payments</h1>
        <h5 className="text-xl font-semibold cursor-pointer">Clear</h5>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mt-7 bg-white rounded-xl shadow-sm flex flex-col w-4/5  py-8 px-6">
          <div className="flex border-b pb-3 border-solid border-opacity-10 border-black items-center justify-between w-full">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0.847 0.876 329.254 329.256"
              >
                <title>Litecoin</title>
                <path
                  d="M330.102 165.503c0 90.922-73.705 164.629-164.626 164.629C74.554 330.132.848 256.425.848 165.503.848 74.582 74.554.876 165.476.876c90.92 0 164.626 73.706 164.626 164.627"
                  fill="#F88A6D"
                />
                <path
                  d="M295.15 165.505c0 71.613-58.057 129.675-129.674 129.675-71.616 0-129.677-58.062-129.677-129.675 0-71.619 58.061-129.677 129.677-129.677 71.618 0 129.674 58.057 129.674 129.677"
                  fill="#F88A6D"
                />
                <path
                  d="M155.854 209.482l10.693-40.264 25.316-9.249 6.297-23.663-.215-.587-24.92 9.104 17.955-67.608h-50.921l-23.481 88.23-19.605 7.162-6.478 24.395 19.59-7.156-13.839 51.998h135.521l8.688-32.362h-84.601"
                  fill="#fff"
                />
              </svg>
              <h3 className="pl-5 text-lg font-bold">Received LTC </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 ml-5"
                viewBox="0 0 20 20"
                fill="gray"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h5 className="shadow rounded-lg text-lg text-gray-600">
              +15.08 USD
            </h5>
          </div>
          <div className="w-full mt-7 flex items-center justify-between">
            <h4 className="text-lg font-bold text-gray-900">
              09/28/2020 19:22
            </h4>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-7 bg-white rounded-xl shadow-sm flex flex-col w-4/5  py-8 px-6">
          <div className="flex border-b pb-3 border-solid border-opacity-10 border-black items-center justify-between w-full">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0.847 0.876 329.254 329.256"
              >
                <title>Litecoin</title>
                <path
                  d="M330.102 165.503c0 90.922-73.705 164.629-164.626 164.629C74.554 330.132.848 256.425.848 165.503.848 74.582 74.554.876 165.476.876c90.92 0 164.626 73.706 164.626 164.627"
                  fill="#2DE0C2"
                />
                <path
                  d="M295.15 165.505c0 71.613-58.057 129.675-129.674 129.675-71.616 0-129.677-58.062-129.677-129.675 0-71.619 58.061-129.677 129.677-129.677 71.618 0 129.674 58.057 129.674 129.677"
                  fill="#2DE0C2"
                />
                <path
                  d="M155.854 209.482l10.693-40.264 25.316-9.249 6.297-23.663-.215-.587-24.92 9.104 17.955-67.608h-50.921l-23.481 88.23-19.605 7.162-6.478 24.395 19.59-7.156-13.839 51.998h135.521l8.688-32.362h-84.601"
                  fill="#fff"
                />
              </svg>
              <h3 className="pl-5 text-lg font-bold">Received LINK </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 ml-5"
                viewBox="0 0 20 20"
                fill="gray"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h5 className="shadow rounded-lg text-lg text-gray-600">
              +957.96 USD
            </h5>
          </div>
          <div className="w-full mt-7 flex items-center justify-between">
            <h4 className="text-lg font-bold text-gray-900">
              09/28/2020 19:22
            </h4>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-purple-200 mx-10 rounded-xl h-16 flex items-center">
        <div className="h-12 w-12 ml-3 bg-white rounded-xl flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="blue"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </div>
        <h3 className="cursor-pointer ml-10 text-xl font-semibold text-boxPurple">
          + New Transfer
        </h3>
      </div>
      <h1 className="text-4xl mt-5 font-bold pl-11">Wallets</h1>
      <div className="flex px-11 mt-5 justify-between items-center">
        <div className="flex">
          <div className="h-14 w-14 bg-red-100 rounded-xl"></div>
          <div className="flex flex-col ml-4 justify-center">
            <h4 className="text-xl font-bold text-gray-600">BTE</h4>
            <p className="text-gray-500 font-semibold">Bitcoin</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-bold">37%</h4>
          <h6 className="text-green-200 font-semibold">-2.5%</h6>
        </div>
      </div>
      <div className="flex px-11 mt-5 justify-between items-center">
        <div className="flex">
          <div className="h-14 w-14 bg-yellow-100 rounded-xl"></div>
          <div className="flex flex-col ml-4 justify-center">
            <h4 className="text-xl font-bold text-gray-600">DAI</h4>
            <p className="text-gray-500 font-semibold">Dai</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-bold">23%</h4>
          <h6 className="text-gray-500 font-semibold">+7.2%</h6>
        </div>
      </div>
      <div className="flex px-11 mt-5 justify-between items-center">
        <div className="flex">
          <div className="h-14 w-14 bg-blue-100 rounded-xl"></div>
          <div className="flex flex-col ml-4 justify-center">
            <h4 className="text-xl font-bold text-gray-600">BTE</h4>
            <p className="text-gray-500 font-semibold">Bitcoin</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-bold">17%</h4>
          <h6 className="text-green-200 font-semibold">-3.1%</h6>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
