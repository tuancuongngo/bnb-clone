import ListingCard from "../components/ListingCard";

const HomePage = () => {
  // generate cards for testing purposes
  const numCards = 11;
  const generateCards = () => {
    return Array.from({ length: numCards }, (_, index) => (
      <ListingCard key={index} />
    ));
  };

  return (
    <div className="w-full px-24 mt-14 flex flex-wrap items-center gap-4">
      {generateCards()}
    </div>
  );
};

export default HomePage;
