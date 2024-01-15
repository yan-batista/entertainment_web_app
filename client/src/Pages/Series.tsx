import { useState } from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import { data } from "../data";
import { CardType } from "../types/CardType";

export const SeriesPage = () => {
  const [series, _] = useState<CardType[]>(getAllSeries);

  /*
   * This function will filter the data, getting only objects that
   * has category as "TV Series" and returning them as an array
   *
   * @return {CardType[]} (all objects that have category as "TV Series")
   */
  function getAllSeries(): CardType[] {
    const series = data.filter((item) => item.category === "TV Series");
    return series.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <section className="flex-grow mx-4 pt-8 md:mx-1 lg:ml-6">
      <SearchBar placeholder="Search for series" />
      <h1 className="text-xl font-light my-6 md:text-3xl">Series</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {series.map((item) => {
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
