import { FC } from "react";
import "./input.css";

export interface IInputProps {
  type: "text" | "number" | "date";
  text: string;
  placeHolder?: string;
  disabled?: boolean;
  className?: string;
}

export const Input: FC<IInputProps> = ({
  type,
  placeHolder,
  className,
  disabled = false,
  text,
}) => {
  return (
    <>
      <label className="input-label">{text}</label>
      <input
        className={`${className ?? ""} input`}
        type={type}
        placeholder={placeHolder}
        disabled={disabled}
      ></input>
    </>
  );
};
