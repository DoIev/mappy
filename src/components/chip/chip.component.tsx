import { FC } from "react";

export interface IChipProps {
  label: string;
  labelColor?: string;
  backgroundColor?: string;
}

export const Chip: FC<IChipProps> = ({
  label,
  backgroundColor,
  labelColor,
}) => {
  return (
    <div
      className="chip"
      style={{
        display: "inline-block",
        color: labelColor ?? "white",
        backgroundColor: backgroundColor ?? "green",
        width: "max-content",
        height: "max-content",
        borderRadius: "25px",
        padding: "0.1rem 0.4rem",
      }}
    >
      {label}
    </div>
  );
};
