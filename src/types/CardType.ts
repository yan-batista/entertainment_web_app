export enum Media {
  movie = "Movie",
  series = "TV Series",
}

export interface CardProps {
  image: string;
  date: string;
  type: Media;
  advisory_rating: string;
  name: string;
  trending?: boolean;
}
