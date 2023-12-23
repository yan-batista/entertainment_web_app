import Card from "./Components/Card";
import Carrousel from "./Components/Carrousel";
import Nav from "./Components/Nav";
import SearchBar from "./Components/SearchBar";

import CardImageTS from "./assets/thumbnails/1998/trending/small.jpg";
import { Media } from "./types/CardType";

function App() {
  return (
    <>
      <Nav />
      <section className="w-full mt-6 px-4 md:px-0 lg:m-5">
        <SearchBar />
      </section>

      <section className="w-full">
        <h1 className="text-xl font-light ml-5 my-6">Trending</h1>
        <Carrousel>
          <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
          <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
          <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
          <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
        </Carrousel>
      </section>
    </>
  );
}

export default App;
