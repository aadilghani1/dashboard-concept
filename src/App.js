import "./App.css";
import LeftSideBar from "./Components/LeftSideBar";
import MainContent from "./Components/MainContent";
import RightSideBar from "./Components/RightSideBar";

function App() {
  return (
    <div className="flex w-screen">
      <LeftSideBar />
      <MainContent />
      <RightSideBar />
    </div>
  );
}

export default App;
