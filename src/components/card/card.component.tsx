import { FC } from "react";

import "./card.css";

export interface ICardProps {
  header: string;
  info: string;
  files?: [];
  fieldsAndValues?: { displayName: string; value: any }[];
  onClick?: () => void;
}

export const Card: FC<ICardProps> = ({ header, info, fieldsAndValues }) => {
  return (
    <div className="card-wrapper">
      <div className="card-header">{header}</div>
      <div className="card-info">{info}</div>
      {fieldsAndValues &&
        fieldsAndValues.map((fieldAndValue, index: number) => (
          <div key={index} className="card-field-value-pair">
            <div className="card-field">{fieldAndValue.displayName}</div>
            <div className="card-value">{fieldAndValue.value}</div>
          </div>
        ))}
    </div>
  );
};
