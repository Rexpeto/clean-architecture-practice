import { createUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

const CreateHomeButton = () => {
  const dispath = useDispatch();

  const dispathAction = () => {
    dispath(
      createUser({
        id: "1",
        name: "Carlos",
        email: "Zzq8J@example.com",
        password: "123456",
      })
    );
  };

  return (
    <button
      onClick={dispathAction}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150"
    >
      Click
    </button>
  );
};

export default CreateHomeButton;
