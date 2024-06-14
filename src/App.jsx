import "./App.css";
import ListingCard from "./components/ListingCard";
import NavBar from "./components/NavBar";

function App() {
  // generate cards for testing purposes
  const numCards = 11;
  const generateCards = () => {
    return Array.from({ length: numCards }, (_, index) => (
      <ListingCard key={index} />
    ));
  };

  return (
    <div className="py-8">
      <NavBar />
      <div className="w-full px-24 mt-14 flex flex-wrap items-center gap-4">
        {generateCards()}
      </div>
    </div>
  );
}

export default App;
