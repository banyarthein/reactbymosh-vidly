import logo from "./logo.svg";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";
import RoutingTable from "./components/common/routingTable";

import "./App.css";

function App() {
  return (
    <main className="container">
      <NavBar />
      <RoutingTable />
    </main>
  );
}

export default App;
