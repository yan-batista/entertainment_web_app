import { useEffect } from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import { useBookmark } from "../contexts/bookmarkContext";
import { useAuth } from "../contexts/userAuthContext";

const BookmarkedPage = () => {
  const { isAuthenticated } = useAuth();
  const { bookmarkedMedia, getBookmarked } = useBookmark();

  /*
   * This function will filter the bookmarked media, putting them in order
   *
   * @return {MediaEntity[]})
   */
  useEffect(() => {
    getBookmarked();
  }, [bookmarkedMedia]);

  return (
    <section className="flex-grow mx-4 pt-8 md:mx-1 lg:ml-6">
      <SearchBar placeholder="Search for media" />
      <h1 className="text-xl font-light my-6 md:text-3xl">Bookmarked</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {bookmarkedMedia.map((item) => {
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
              isBookmarked={true}
            ></Card>
          );
        })}
      </div>
    </section>
  );
};

export default BookmarkedPage;
