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
          <h3>Email:</h3>
          <p>{user?.email}</p>
        </div>
      </div>
      <Home />
    </div>
  );
};

export default App;
