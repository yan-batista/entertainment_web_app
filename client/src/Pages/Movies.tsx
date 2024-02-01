import { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import { useBookmark } from "../contexts/bookmarkContext";
import { useAuth } from "../contexts/userAuthContext";
import { getAllMovies } from "../services/mediaRequests";
import { MediaEntity } from "../types/CardType";

const MoviesPage = () => {
  const [movies, setMovies] = useState<MediaEntity[]>([]);
  const { isAuthenticated } = useAuth();
  const { bookmarkedListLoaded, getBookmarked, checkIfBookmarked } = useBookmark();

  /*
   * This function will filter the data, getting only objects that
   * has category as "Movie" and returning them as an array
   *
   * @return {MediaEntity[]} (all objects that have category as "Movie")
   */
  useEffect(() => {
    const fetchData = async () => {
      const data: MediaEntity[] = await getAllMovies();
      const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
      setMovies(sortedData);
    };

    getBookmarked();
    fetchData();
  }, []);

  function getAllMovieData() {
    return movies.map((item) => {
      return (
        <Card
          key={item.title}
          itemId={item.id}
          image={item.regularImageURL}
          year={item.year}
          type={item.category}
          advisory_rating={item.rating}
          name={item.title}
          bookmarkVisible={isAuthenticated}
          isBookmarked={checkIfBookmarked(item)}
        ></Card>
      );
    });
  }

  return (
    <section className="flex-grow mx-4 pt-8 md:mx-1 lg:ml-6">
      <SearchBar placeholder="Search for movies" filterType="movie" />
      <h1 className="text-xl font-light my-6 md:text-3xl">Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {isAuthenticated ? bookmarkedListLoaded && getAllMovieData() : getAllMovieData()}
      </div>
    </section>
  );
};

export default MoviesPage;
