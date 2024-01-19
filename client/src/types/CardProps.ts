export interface CardProps {
  image: string;
  year: number;
  type: string;
  advisory_rating: string;
  name: string;
  trending?: boolean;
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
