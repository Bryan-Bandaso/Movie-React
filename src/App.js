import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Marvel from "./components/Marvel";
import ListMovie from "./components/ListMovie";

import "./style/navbar.css";
import "./style/marvel.css";
import "./style/list.css";

function App() {
  return (
    <div>
      <div id="Navbar">
        <NavigationBar />
        <Intro />
      </div>
      <div id="Marvel">
        <Marvel />
      </div>
      <div id="List">
        <ListMovie />
      </div>
    </div>
  );
}

export default App;
