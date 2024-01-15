import { useState } from "react";
import { CloseIcon, SearchIcon } from "../Icons";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }: SearchBarProps) => {
  const [searchBarInput, setSearchBarInput] = useState("");

  // saves search bar state
  function onChangeSetSearchBarInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchBarInput(event.currentTarget.value);
  }

  // click the clear search bar input button
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
      <SearchIcon className="w-6 h-6" viewbox={"0 0 32 32"} fill="white" />
      <input
        type="text"
        name="media_name_search"
        id="media_name_search"
        className="bg-transparent border-b border-bg focus:border-b focus:border-icon outline-none w-full py-2 font-light md:text-2xl"
        placeholder={placeholder}
        defaultValue={searchBarInput}
        onChange={onChangeSetSearchBarInput}
      />
      {searchBarInput.length > 0 && (
        <div className="absolute right-0" onClick={onButtonClickClearSeachBarInput}>
          <CloseIcon
            className="w-4 h-4 fill-none stroke-white md:w-5 md:h-5 lg:w-6 lg:h-6"
            viewbox={"0 0 24 24"}
            fill="none"
            stroke="white"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
