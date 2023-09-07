import { resetUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

const ModifyHomeButton = () => {
  const dispath = useDispatch();

  const dispathAction = () => {
    dispath(resetUser());
  };

  return (
    <button
      onClick={dispathAction}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150"
    >
      Reset
    </button>
  );
};

export default ModifyHomeButton;
