import "./App.css";
import ListingCard from "./components/ListingCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="container">
        <ListingCard />
      </div>
    </div>
  );
}

export default App;
