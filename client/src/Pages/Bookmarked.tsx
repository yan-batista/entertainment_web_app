import { useEffect, useState } from "react";
import api from "../lib/axios";
import { MediaEntity } from "../types/CardType";

const BookmarkedPage = () => {
  const [media, setMedia] = useState<MediaEntity[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await api.get("/bookmarked", { withCredentials: true });
        setMedia(resp.data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  console.log(media);

  return <h1>Bookmarked Page</h1>;
};

export default BookmarkedPage;
