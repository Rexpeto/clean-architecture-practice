import { Home } from "./pages";
import { AppStore } from "./redux/store";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state: AppStore) => state.user);
  return (
    <>
      <span>{JSON.stringify(user)}</span>
      <Home />
    </>
  );
};

export default App;
