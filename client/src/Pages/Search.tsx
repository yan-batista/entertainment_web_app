import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import { useBookmark } from "../contexts/bookmarkContext";
import { useAuth } from "../contexts/userAuthContext";
import { getMediaByName } from "../services/mediaRequests";
import { MediaEntity } from "../types/CardType";

const SearchPage = () => {
  const [results, setResults] = useState<MediaEntity[]>([]);
  const [searchParams] = useSearchParams();
  const { isAuthenticated } = useAuth();
  const { bookmarkedListLoaded, getBookmarked, checkIfBookmarked } = useBookmark();

  /*
   * this function will get the params from the route
   * and call the service function to get all media that has
   * the input text on their titles.
   * Then, the returned data is set to results.
   */
  useEffect(() => {
    const title = searchParams.get("title");
    let category = searchParams.get("category");

    const fetchData = async () => {
      let resp;
      if (title && category) {
        resp = await getMediaByName(title, category);
      } else if (title && !category) {
        resp = await getMediaByName(title, undefined);
      }
      setResults(resp);
    };

    getBookmarked();
    fetchData();
  }, [searchParams]);

  return (
    <section className="flex-grow mx-4 pt-8 md:mx-1 lg:ml-6">
      <SearchBar placeholder="Search for movies" />
      <h1 className="text-xl font-light my-6 md:text-3xl">
        Found {results.length} results for "{searchParams.get("title")}"
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {bookmarkedListLoaded &&
          results.map((item) => {
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

export default SearchPage;
