import { FC, useLayoutEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Card } from "../../ui";

const List: FC = () => {
  const list = useAppSelector((state) => state.InteractiveList.list);
  const isDeleteEvent = useAppSelector(
    (state) => state.InteractiveList.isDeleteEvent
  );
  const deletedCard = useAppSelector(
    (state) => state.InteractiveList.deletedCard
  );

  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    if (!deletedCard) {
      setAnimate(true);

      const timer = setTimeout(() => {
        setAnimate(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [list, deletedCard]);

  return (
    <section className="h-[80vh] flex justify-center items-center">
      <ul className="grid grid-cols-4 gap-5 max-h-[80vh] w-[80vw] mb-auto pr-2 overflow-y-auto overflow-x-hidden scrollbar scrollbar-thumb-gray-300 scrollbar-track-inherit">
        {list.map((data, index) => (
          <Card
            animate={animate}
            {...data}
            isDeleted={isDeleteEvent && index === list.length - 1}
          />
        ))}
      </ul>
    </section>
  );
};

export { List };
