import { data } from "../data";
import { default as getSupabaseConnection, default as supabase_connection } from "./config";

interface Media {
  title: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

const seed_database = async () => {
  // clear the database (delete all rows where id not equals 0. delete REQUIRES a where clause)
  let { error } = await supabase_connection().from("Media").delete().neq("id", 0);
  if (error) console.log(error.message);

  // seed the database
  // gets data, filters it by removing thumbnail and isBookmard, and created a new array with just the other data
  const formattedData = (data as Media[]).map(({ thumbnail, isBookmarked, ...rest }: Media) => {
    const title = rest.title.replace(/\s/g, "-").replace(/[:’]/g, "");

    const getImageUrl = (category: string) => {
      const { data } = getSupabaseConnection()
        .storage.from("EntertainmentWebApp")
        .getPublicUrl(`thumbnails/${title.toLowerCase()}/${category}/large.jpg`);

      return data;
    };

    return {
      ...rest,
      title: rest.title.toLocaleLowerCase(),
      category: rest.category.toLocaleLowerCase().replace(/\s/g, "-"),
      rating: rest.rating.toLocaleLowerCase(),
      trendingImageURL: getImageUrl("trending").publicUrl,
      regularImageURL: getImageUrl("regular").publicUrl,
    };
  });
  ({ error } = await supabase_connection().from("Media").insert(formattedData));
  if (error) console.log(error.message);
};

export default seed_database;
