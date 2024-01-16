interface MediaEntity {
  id: number;
  title: string;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
  imageURL: string;
}

export default MediaEntity;
