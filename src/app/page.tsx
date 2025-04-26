import AirBnbItem from "./components/AirBnbItem";
import AirBnbList from "./components/AirBnbList";
import Search from "./components/Search";

export default function Home() {
  return (
    <>
      <Search />
      <AirBnbList />
      <AirBnbItem />
    </>
  );
}
