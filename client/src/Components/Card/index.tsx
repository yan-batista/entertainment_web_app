import { useState } from "react";
import { addBookmark, removeBookmark } from "../../services/bookmarkedRequests";
import { CardProps } from "../../types/CardType";
import { BookmarkIcon, BookmarkIconActive, MovieIcon, PlayIcon, TVIcon } from "../Icons";

const Card: React.FC<CardProps> = ({
  itemId,
  image,
  year,
  type,
  advisory_rating,
  name,
  trending = false,
  bookmarkVisible = false,
}: CardProps) => {
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const getCardSize = () => {
    if (trending) return "w-[15rem] h-[8rem] mobile-l:w-[24rem] mobile-l:h-[12rem] md:w-[30rem] md:h-[15rem]";
    else return "w-full/2";
  };

  async function onClickSetBookmarked() {
    if (bookmarked) {
      setBookmarked(false); // client
      /**
       * Make request to the backend to remove bookmarked for the user
       */
      try {
        await removeBookmark(itemId);
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      setBookmarked(true); // client
      /**
       * Make request to the backend to save as bookmarked for the user
       */
      try {
        await addBookmark(itemId);
      } catch (error: any) {
        console.error(error.message);
      }
    }
  }

  function capitalizeWords(str: string): string {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <div className={`relative ${getCardSize()} h-fit flex-grow cursor-pointer group/play select-none`}>
      <div className={`rounded-xl overflow-hidden relative ${trending ? getCardSize() : "w-full h-full"}`}>
        <img src={image} className="rounded-lg w-full h-full object-cover" />
        <div
          id="overlay"
          className="absolute top-0 left-0 w-full h-full bg-black/20 group-hover/play:bg-black/60 duration-200"
        ></div>
        <div
          className={`absolute top-2 right-2 border border-black/30 bg-black/30 rounded-full p-2 hover:border-white hover:bg-white group/icon duration-500 cursor-pointer z-10 ${bookmarkVisible ? "visible" : "invisible"}`}
          onClick={onClickSetBookmarked}
        >
          {bookmarked && (
            <BookmarkIconActive
              className="w-5 h-5 fill-white group-hover/icon:fill-black duration-500 cursor-pointer"
              viewbox="0 0 12 14"
            />
          )}
          {!bookmarked && (
            <BookmarkIcon
              className="w-5 h-5 fill-none stroke-white group-hover/icon:stroke-black duration-500 cursor-pointer"
              viewbox="0 0 12 14"
            />
          )}
        </div>
      </div>

      <div
        id="info"
        className={`${trending === false ? "mt-2" : "absolute top-16 left-5 mobile-l:top-32 md:top-40"} w-full`}
      >
        <div className="flex flex-row items-center gap-1 text-[11px] font-light md:text-base">
          <p id="media-date">{year}</p>
          <span>•</span>
          <p id="media-type" className="flex flex-row items-center gap-2">
            {type === "Movie" ? (
              <MovieIcon className="w-3 h-3 fill-zinc-300" />
            ) : (
              <TVIcon className="w-3 h-3 fill-zinc-300" />
            )}
            {capitalizeWords(type.replace(/-/g, " "))}
          </p>
          <span>•</span>
          <p id="media-age">{advisory_rating.toUpperCase()}</p>
        </div>
        <p id="media-name" className="font-bold max-w-full flex flex-wrap whitespace-normal md:text-2xl md:font-normal">
          {capitalizeWords(name)}
        </p>
      </div>

      <div
        id="play_button"
        className={`flex flex-row items-center gap-3 bg-zinc-400/60 rounded-full w-fit p-2 absolute ${
          trending ? "top-1/2 left-1/2" : "top-1/3 left-1/2 md:top-[35%] lg:top-[40%]"
        } -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover/play:opacity-100 duration-[400ms]
md:gap-6 md:p-3`}
      >
        <PlayIcon className="w-5 h-5 fill-white cursor-pointer mobile-l:w-7 mobile-l:h-7" viewbox="0 0 30 30" />
        <p>Play</p>
      </div>
    </div>
  );
};

export default Card;
