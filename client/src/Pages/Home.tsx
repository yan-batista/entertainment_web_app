import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Carrousel from "../Components/Carrousel";
import SearchBar from "../Components/SearchBar";

import { useBookmark } from "../contexts/bookmarkContext";
import { useAuth } from "../contexts/userAuthContext";
import { getAllMediaApi } from "../services/mediaRequests";
import { MediaEntity } from "../types/CardType";

const HomePage = () => {
  const [media, setMedia] = useState<MediaEntity[]>([]);
  const { isAuthenticated } = useAuth();
  const { bookmarkedListLoaded, getBookmarked, checkIfBookmarked } = useBookmark();

  /*
   * This function will get all the movies/series sorted by title.
   *
   * @return {MediaEntity[]} (sorted array of movies/series)
   */
  useEffect(() => {
    const fetchMedia = async () => {
      const data: MediaEntity[] = await getAllMediaApi();
      const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
      setMedia(sortedData);
    };

    getBookmarked();
    fetchMedia();
  }, []);

  /*
   * This function map through all sorted movies saved on state
   * and create a Card component using data from mapped objects
   * that have the key "isTrending" set to TRUE.
   *
   * @return {CardType[]} (card components from objects which isTrending == TRUE)
   */
  function getAllTrendingImageCards() {
    return media.map((item, index) => {
      if (item.isTrending) {
        return (
          <Card
            itemId={item.id}
            key={`${item.title}_$${index}`}
            image={item.trendingImageURL}
            year={item.year}
            type={item.category}
            advisory_rating={item.rating}
            name={item.title}
            trending
            bookmarkVisible={isAuthenticated}
            isBookmarked={checkIfBookmarked(item)}
          ></Card>
        );
      }
    });
  }

  /*
   * This function map through all sorted movies saved on state
   * and create a Card component using data from mapped objects
   * that have the key "isTrending" set to FALSE.
   *
   * @return {CardType[]} (card components from objects which isTrending == FALSE)
   */
  function getAllRegularImageCards() {
    return media.map((item, index) => {
      if (!item.isTrending) {
        return (
          <Card
            itemId={item.id}
            key={`${item.title}_$${index}`}
            image={item.regularImageURL}
            year={item.year}
            type={item.category}
            advisory_rating={item.rating}
            name={item.title}
            bookmarkVisible={isAuthenticated}
            isBookmarked={checkIfBookmarked(item)}
          ></Card>
        );
      }
    });
  }

  return (
    <>
      <section className="flex flex-col max-w-full lg:flex-grow lg:pr-24">
        <section className="w-full mt-6 px-4 md:px-0 lg:m-5">
          <SearchBar placeholder="Search for movies or TV Series" />
        </section>

        <section className="md:-mx-8 lg:ml-2 ">
          <h1 className="text-xl font-light my-6 px-4 md:text-3xl">Trending</h1>
          <Carrousel>
            {isAuthenticated ? bookmarkedListLoaded && getAllTrendingImageCards() : getAllTrendingImageCards()}
          </Carrousel>
        </section>

        <section className="mx-4 md:-mx-2 lg:ml-6 lg:max-w-full">
          <h1 className="text-xl font-light my-6 md:text-3xl">Recommended For You</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {isAuthenticated ? bookmarkedListLoaded && getAllRegularImageCards() : getAllRegularImageCards()}
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
