import {
  CreateHomeButton,
  ModifyHomeButton,
  ResetHomeButton,
} from "./components";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex gap-4 pt-5">
        <CreateHomeButton />
        <ModifyHomeButton />
        <ResetHomeButton />
      </div>
    </div>
  );
};

export default Home;
