import { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import { getAllMovies } from "../services/mediaRequests";
import { MediaEntity } from "../types/CardType";

export const MoviesPage = () => {
  const [movies, setMovies] = useState<MediaEntity[]>([]);

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

    fetchData();
  }, []);

  return (
    <section className="flex-grow mx-4 pt-8 md:mx-1 lg:ml-6">
      <SearchBar placeholder="Search for movies" />
      <h1 className="text-xl font-light my-6 md:text-3xl">Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies.map((item) => {
          return (
            <Card
              key={item.title}
              image={item.imageURL}
              year={item.year}
              type={item.category}
              advisory_rating={item.rating}
              name={item.title}
            ></Card>
          );
        })}
      </div>
    </section>
  );
};
