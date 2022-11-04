import { FC } from "react";

import "./button.css";

export interface IButtonProps {
  onClick: () => void;
  onHover?: () => void;
  innerContent: any;
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  onHover,
  innerContent,
  className,
}) => {
  return (
    <div
      className={`${className ?? ""} button`}
      onClick={onClick}
      onMouseOver={onHover}
    >
      {innerContent}
    </div>
  );
};
