export enum Media {
  movie = "Movie",
  series = "TV Series",
}

export interface CardProps {
  image: string;
  year: number;
  type: string;
  advisory_rating: string;
  name: string;
  trending?: boolean;
}

export interface CardType {
  title: string;
  thumbnail: {
    regular: {
      small: string;
      medium: string;
      large: string;
    };
    trending?: {
      small: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface MediaEntity {
  id: number;
  title: string;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
  imageURL: string;
}
