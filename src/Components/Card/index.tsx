import { BookmarkIcon } from "../Icon/Icons";
import { CardProps } from "../../types/CardType";

const Card: React.FC<CardProps> = ({ image, date, type, advisory_rating, name, trending = false }: CardProps) => {
  const getCardSize = () => {
    if (trending) return "w-[15rem] h-[8rem]";
    else return "w-full/2";
  };

  return (
    <div className={`relative ${getCardSize()} h-fit flex-grow`}>
      <div className={`rounded-xl overflow-hidden relative ${trending ? getCardSize() : "w-full h-full"}`}>
        <img src={image} className="rounded-lg w-full h-full object-cover" />
        <div
          id="overlay"
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-black/70 "
        ></div>
        <div className="absolute top-2 right-2 border border-black/30 bg-black/30 rounded-full p-2 hover:border-white hover:bg-white group duration-500">
          <BookmarkIcon />
        </div>
      </div>

      <div id="info" className={`${trending === false ? "mt-2" : "absolute top-16 left-5"} w-full`}>
        <div className="flex flex-row items-center gap-2 text-xs font-light">
          <p id="media-date">{date}</p>
          <span>•</span>
          <p id="media-type" className="flex flex-row items-center gap-2">
            {/* <MovieIcon /> */} {type}
          </p>
          <span>•</span>
          <p id="media-age">{advisory_rating}</p>
        </div>
        <p id="media-name" className="font-bold max-w-full flex flex-wrap whitespace-normal">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Card;
