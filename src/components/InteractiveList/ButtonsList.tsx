import { FC } from "react";
import { Button } from "../../ui";
import { ButtonColors } from "../../ui/Button/model";
import { useAppDispatch } from "../../hooks/redux";
import { actions } from "../../events";
import { deleteCard } from "../../events/ListSlice";

const ButtonsList: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="flex flex-row gap-10">
      <Button
        color={ButtonColors.GREEN}
        onClick={() => dispatch(actions.InteractiveList.generateCard())}
      >
        Добавить
      </Button>
      <Button onClick={() => dispatch(deleteCard())} color={ButtonColors.RED}>
        Удалить
      </Button>
    </section>
  );
};

export { ButtonsList };
