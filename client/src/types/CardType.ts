export interface CardProps {
  itemId: number;
  image: string;
  year: number;
  type: string;
  advisory_rating: string;
  name: string;
  trending?: boolean;
  bookmarkVisible?: boolean;
}

export interface MediaEntity {
  id: number;
  title: string;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
  trendingImageURL: string;
  regularImageURL: string;
}
