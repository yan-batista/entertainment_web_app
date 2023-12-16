import { BookmarkIcon } from "../Icon/Icons";
import { CardProps } from "../../types/CardType";

const Card: React.FC<CardProps> = ({ image, date, type, advisory_rating, name }: CardProps) => {
  return (
    <div className="rounded-xl w-60 h-36 overflow-hidden relative">
      <img src={image} className="rounded-lg w-full h-full" />
      <div
        id="overlay"
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-black/70"
      ></div>
      <div className="absolute top-2 right-2 border border-black/30 bg-black/30 rounded-full p-2 hover:border-white hover:bg-white group duration-500">
        <BookmarkIcon />
      </div>
      <div id="info" className="absolute bottom-4 left-3">
        <div className="flex flex-row items-center gap-2 text-xs font-light">
          <p id="media-date">{date}</p>
          <span>•</span>
          <p id="media-type" className="flex flex-row items-center gap-2">
            {/* <MovieIcon /> */} {type}
          </p>
          <span>•</span>
          <p id="media-age">{advisory_rating}</p>
        </div>
        <p id="media-name" className="font-bold">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Card;
