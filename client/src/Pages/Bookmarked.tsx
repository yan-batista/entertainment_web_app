import { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import { useAuth } from "../contexts/userAuthContext";
import { getAllBookmarkedMedia } from "../services/bookmarkedRequests";
import { MediaEntity } from "../types/CardType";

const BookmarkedPage = () => {
  const [media, setMedia] = useState<MediaEntity[]>([]);
  const { isAuthenticated } = useAuth();

  /*
   * This function will filter the bookmarked media, putting them in order
   *
   * @return {MediaEntity[]})
   */
  useEffect(() => {
    const fetchData = async () => {
      const data: MediaEntity[] = await getAllBookmarkedMedia();
      const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
      setMedia(sortedData);
    };

    fetchData();
  }, []);

  return (
    <section className="flex-grow mx-4 pt-8 md:mx-1 lg:ml-6">
      <SearchBar placeholder="Search for media" />
      <h1 className="text-xl font-light my-6 md:text-3xl">Bookmarked</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {media.map((item) => {
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
            ></Card>
          );
        })}
      </div>
    </section>
  );
};

export default BookmarkedPage;
