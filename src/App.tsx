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
      <section className="flex flex-col max-w-full overflow-x-hidden">
        <section className="w-full mt-6 px-4 md:px-0 lg:m-5">
          <SearchBar />
        </section>

        <section>
          <h1 className="text-xl font-light my-6 px-4">Trending</h1>
          <Carrousel>
            <div></div>
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" trending />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" trending />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" trending />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" trending />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" trending />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" trending />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" trending />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" trending />
            <div></div>
          </Carrousel>
        </section>

        <section className="mx-4">
          <h1 className="text-xl font-light my-6">Recommended For You</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
            <Card image={CardImageTS} date="2021" type={Media.movie} advisory_rating="18+" name="1998" />
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
