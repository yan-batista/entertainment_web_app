interface MediaEntity {
  id: number;
  title: string;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
  regularImageURL: string;
  trendingImageURL: string;
}
export default MediaEntity;
