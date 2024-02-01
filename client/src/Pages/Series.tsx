import { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import { useBookmark } from "../contexts/bookmarkContext";
import { useAuth } from "../contexts/userAuthContext";
import { getAllSeries } from "../services/mediaRequests";
import { MediaEntity } from "../types/CardType";

const SeriesPage = () => {
  const [series, setSeries] = useState<MediaEntity[]>([]);
  const { isAuthenticated } = useAuth();
  const { bookmarkedListLoaded, getBookmarked, checkIfBookmarked } = useBookmark();

  /*
   * This function will filter the data, getting only objects that
   * has category as "TV Series" and returning them as an array
   *
   * @return {MediaEntity[]} (all objects that have category as "TV Series")
   */
  useEffect(() => {
    const fetchData = async () => {
      const data: MediaEntity[] = await getAllSeries();
      const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
      setSeries(sortedData);
    };

    getBookmarked();
    fetchData();
  }, []);

  return (
    <section className="flex-grow mx-4 pt-8 md:mx-1 lg:ml-6">
      <SearchBar placeholder="Search for series" filterType="tv-series" />
      <h1 className="text-xl font-light my-6 md:text-3xl">Series</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {bookmarkedListLoaded &&
          series.map((item) => {
            return (
              <Card
                itemId={item.id}
                key={item.title}
                image={item.regularImageURL}
                year={item.year}
                type={item.category}
                advisory_rating={item.rating}
                name={item.title}
                bookmarkVisible={isAuthenticated}
                isBookmarked={checkIfBookmarked(item)}
              ></Card>
            );
          })}
      </div>
    </section>
  );
};

export default SeriesPage;
