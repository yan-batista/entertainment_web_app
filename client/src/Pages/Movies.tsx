import { useState } from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import { data } from "../data";
import { CardType } from "../types/CardType";

export const MoviesPage = () => {
  const [movies, _] = useState<CardType[]>(getAllMovies);

  /*
   * This function will filter the data, getting only objects that
   * has category as "Movie" and returning them as an array
   *
   * @return {CardType[]} (all objects that have category as "Movie")
   */
  function getAllMovies(): CardType[] {
    const movies = data.filter((item) => item."category" === "Movie");
    return movies.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <section className="flex-grow mx-4 pt-8 md:mx-1 lg:ml-6">
      <SearchBar placeholder="Search for movies" />
      <h1 className="text-xl font-light my-6 md:text-3xl">Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies.map((item) => {
          return (
            <Card
              key={item.title}
              image={item.thumbnail.regular.medium}
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
