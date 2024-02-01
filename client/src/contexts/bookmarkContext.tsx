// AuthProvider.tsx
import React, { createContext, useContext, useState } from "react";
import { getAllBookmarkedMedia } from "../services/bookmarkedRequests";
import { MediaEntity } from "../types/CardType";

// Define the type for authentication context
type BookmarkContextType = {
  bookmarkedMedia: MediaEntity[];
  bookmarkedListLoaded: boolean;
  getBookmarked: () => void;
  checkIfBookmarked: (item: MediaEntity) => boolean;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmark must be used within an BookmarkProvider");
  }
  return context;
};

type BookmarkProviderProps = {
  children: React.ReactNode;
};

export const BookmarkProvider = ({ children }: BookmarkProviderProps) => {
  const [bookmarkedMedia, setBookmarkedMedia] = useState<MediaEntity[]>([]);
  const [bookmarkedListLoaded, setBookmarkedListLoaded] = useState<boolean>(false);

  async function getBookmarked() {
    setBookmarkedListLoaded(false);
    const data: MediaEntity[] = await getAllBookmarkedMedia();
    const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
    setBookmarkedMedia(sortedData);
    setBookmarkedListLoaded(true);
  }

  function checkIfBookmarked(item: MediaEntity): boolean {
    for (let i = 0; i < bookmarkedMedia.length; i++) {
      if (item.id === bookmarkedMedia[i].id) {
        return true;
      }
    }

    return false;
  }

  const bookmarkContextValue: BookmarkContextType = {
    bookmarkedMedia,
    bookmarkedListLoaded,
    getBookmarked,
    checkIfBookmarked,
  };

  return <BookmarkContext.Provider value={bookmarkContextValue}>{children}</BookmarkContext.Provider>;
};
