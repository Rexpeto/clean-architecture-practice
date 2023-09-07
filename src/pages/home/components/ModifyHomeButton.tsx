import { modifyUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

const ModifyHomeButton = () => {
  const dispath = useDispatch();

  const dispathAction = () => {
    dispath(
      modifyUser({
        id: "1",
        name: "Carlos Gallardo",
        email: "Zzq8J@example.com",
        password: "12292308",
      })
    );
  };

  return (
    <button
      onClick={dispathAction}
      className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-150"
    >
      Modify
    </button>
  );
};

export default ModifyHomeButton;
