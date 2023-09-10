import { EmptyMortyState } from "@/models";
import { createUser } from "@/redux/slices/user.slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRickAndMorty, rickAndMortyUrl } from "../services";

const CreateHomeButton = () => {
  const [morty, setMorty] = useState(EmptyMortyState);
  const dispath = useDispatch();

  const getMorty = async () => {
    const result = await fetchRickAndMorty(rickAndMortyUrl);

    setMorty(result);
  };

  useEffect(() => {
    getMorty();
  });

  const dispathAction = () => {
    dispath(createUser(morty));
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
