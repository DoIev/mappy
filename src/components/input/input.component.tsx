import { FC } from "react";
import "./input.css";

export interface IInputProps {
  type: "text" | "number" | "date";
  text: string;
  placeHolder?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: FC<IInputProps> = ({
  type,
  placeHolder,
  className,
  disabled = false,
  text,
  onClick,
  onFocus,
  onBlur,
}) => {
  return (
    <>
      <label className="input-label">{text}</label>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
        className={`${className ?? ""} input`}
        type={type}
        placeholder={placeHolder}
        disabled={disabled}
      ></input>
    </>
  );
};
