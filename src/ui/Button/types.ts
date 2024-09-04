import { HTMLAttributes } from "react";
import { ButtonColors } from "./model";

export type TButton = HTMLAttributes<HTMLButtonElement> & {
  color: ButtonColors;
};
