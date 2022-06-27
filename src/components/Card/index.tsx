import React, { FC, ReactNode } from "react";

import Skeleton from "../Skeleton";

import styles from "./Card.module.scss";

interface Text {
  text?: string | ReactNode;
  isLoading?: boolean;
}

interface CardProps {
  title: string;
  value: Text;
  bottomText?: Text;
}

const Card: FC<CardProps> = ({ title, value, bottomText }) => {
  return (
    <div className={styles.Container}>
      <label>{title}</label>
      <span className={styles.Value}>{value.isLoading ? <Skeleton /> : value.text ?? "ERR"}</span>
      {bottomText && <span>{bottomText.isLoading ? <Skeleton width={100} /> : bottomText.text ?? "ERR"}</span>}
    </div>
  );
};

export default Card;
