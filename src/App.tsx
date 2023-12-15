import Nav from "./Components/Nav";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <Nav />
      <section className="w-full p-4">
        <SearchBar />
      </section>
    </>
  );
}

export default App;
