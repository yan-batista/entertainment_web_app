import Nav from "./Components/Nav";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <Nav />
      <section className="w-full my-7">
        <SearchBar />
      </section>
    </>
  );
}

export default App;
