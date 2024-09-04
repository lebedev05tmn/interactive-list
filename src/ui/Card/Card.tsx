import { FC, LegacyRef, useEffect, useRef } from "react";
import cn from "classnames";
import { TCard } from "./types";

const Card: FC<TCard> = ({ animate, color, isDeleted }) => {
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isDeleted) {
      cardRef.current?.classList.add("animate-[delete_0.5s_ease-in-out]");
    }

    return () =>
      cardRef.current?.classList.remove("animate-[delete_0.5s_ease-in-out]");
  }, [isDeleted]);

  return (
    <li
      ref={cardRef as LegacyRef<HTMLLIElement> | undefined}
      className={cn("w-full h-[20vw] flex-shrink-0", {
        "animate-[adding_0.5s_ease-in-out]": animate,
      })}
      style={{ backgroundColor: color }}
    ></li>
  );
};

export { Card };
