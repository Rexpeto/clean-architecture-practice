import { Home } from "./pages";
import { AppStore } from "./redux/store";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state: AppStore) => state.user);
  return (
    <div>
      <div className="flex flex-col gap-3 justify-center">
        <div className="flex gap-2 items-center">
          <h3>Name:</h3>
          <p>{user?.name}</p>
        </div>

        <div className="flex gap-2 items-center">
          <h3>Status:</h3>
          <p>{user?.status}</p>
        </div>
      </div>
      <Home />
    </div>
  );
};

export default App;
