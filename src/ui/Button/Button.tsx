import { FC } from "react";
import cn from "classnames";
import { TButton } from "./types";

const Button: FC<TButton> = ({ color, ...props }) => {
  return (
    <button
      tabIndex={0}
      role="button"
      className={cn(
        "w-full h-10 text-white rounded-xl hover:opacity-70 focus:opacity-70",
        color,
        { [props.className!]: props.className }
      )}
      {...props}
    ></button>
  );
};

export { Button };
