import React, { FC, ReactNode } from "react";

import Skeleton from "../Skeleton";

import styles from "./Card.module.scss";

interface Text {
  text?: string | ReactNode;
  isLoading?: boolean;
}

interface CardProps {
  title: string;
  value: Text | string | number;
  bottomText?: Text | string | number;
}

const Card: FC<CardProps> = ({ title, value, bottomText }) => {
  return (
    <div className={styles.Container}>
      <label>{title}</label>
      <span className={styles.Value}>
        {typeof value === "object" ? <>{value.isLoading ? <Skeleton width={"50%"} /> : value.text ?? "ERR"}</> : value}
      </span>
      {bottomText && (
        <>
          {typeof bottomText === "object" ? (
            <>{bottomText.isLoading ? <Skeleton width={"50%"} /> : bottomText.text ?? "ERR"}</>
          ) : (
            bottomText
          )}
        </>
      )}
    </div>
  );
};

export default Card;
