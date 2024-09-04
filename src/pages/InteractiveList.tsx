import { FC } from "react";
import { ButtonsList, List } from "../components/InteractiveList";

const InteractiveList: FC = () => {
  return (
    <main className="w-[80vw] h-3/4 absolute left-1/2 -translate-x-1/2 top-1 flex flex-col gap-2">
      <ButtonsList />
      <List />
    </main>
  );
};

export default InteractiveList;
