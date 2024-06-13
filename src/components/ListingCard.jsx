import { MapPin, DollarSign, Star, UsersRound } from "lucide-react";

const ListingCard = ({ title, image, location, price, rating, numGuests }) => {
  return (
    <div className="max-w-sm border rounded-md bg-white text-gray-950 p-3 cursor-pointer">
      <img
        src={image ? image : "/default-card-img.jpg"}
        alt="Main Listing Image"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="flex-col">
        <div className="flex justify-between pt-1 text-xl">
          <div className="font-bold text-pretty">{title}</div>
          <div className="flex items-center gap-0.5">
            <Star fill="currentColor" className="w-5 h-5" />
            {rating}
          </div>
        </div>
        <div className="flex items-center gap-0.5 pt-1">
          <MapPin className="h-5 w-5" />
          {location}
        </div>
        <div className="flex items-center gap-0.5 pt-1">
          <DollarSign className="h-5 w-5" />
          {price}
        </div>
        <div className="flex items-center gap-0.5 pt-1">
          <UsersRound className="h-5 w-5" />
          {numGuests}
        </div>
      </div>
    </div>
  );
};

ListingCard.defaultProps = {
  title: "Mansion Listing",
  image: "/default-card-img.jpg",
  location: "Sao Paulo, Brazil",
  price: 999,
  rating: 4.88,
  numGuests: 2,
};

export default ListingCard;
