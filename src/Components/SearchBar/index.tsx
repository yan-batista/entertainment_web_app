import { useState } from "react";
import { SearchIcon } from "../Icon/Icons";

const SearchBar = () => {
  const [searchBarInput, setSearchBarInput] = useState("");

  function onChangeSetSearchBarInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchBarInput(event.currentTarget.value);
  }

  function onButtonClickClearSeachBarInput() {
    // clear state
    setSearchBarInput("");

    // clear input bar text and maintain focus
    const search_bar: HTMLInputElement | null = document.querySelector("#media_name_search");
    if (search_bar) {
      search_bar.value = "";
      search_bar.focus();
    }
  }

  return (
    <div className="flex flex-row items-center w-full gap-4 relative">
      <SearchIcon />
      <input
        type="text"
        name="media_name_search"
        id="media_name_search"
        className="bg-transparent border-b border-bg focus:border-b focus:border-icon outline-none  w-full py-2 font-light"
        placeholder="Search for movies or TV Series"
        defaultValue={searchBarInput}
        onChange={onChangeSetSearchBarInput}
      />
      {searchBarInput.length > 0 && (
        <span className="absolute right-0" onClick={onButtonClickClearSeachBarInput}>
          X
        </span>
      )}
    </div>
  );
};

export default SearchBar;
