import React, { FC, ReactNode } from "react";

import Skeleton from "../Skeleton";

import styles from "./Card.module.scss";

interface Text {
  text?: string | ReactNode;
  isLoading?: boolean;
}

export interface CardProps {
  title: string;
  value: Text | string | number;
  bottomText?: Text | string | number;
}

const TEST_ID = {
  title: "zui-card-title",
  value: "zui-card-value",
  bottomText: "zui-card-bottom-text",
};

const Card: FC<CardProps> = ({ title, value, bottomText }) => (
  <div className={styles.Container}>
    <label data-id={TEST_ID.title}>{title}</label>
    <span className={styles.Value}>
      {typeof value === "object" ? <>{value.isLoading ? <Skeleton width={"50%"} /> : value.text ?? "ERR"}</> : value}
    </span>
    {bottomText && (
      <>
        {typeof bottomText === "object" ? (
          <>{bottomText.isLoading ? <Skeleton width={"50%"} /> : <span>bottomText.text</span> ?? "ERR"}</>
        ) : (
          bottomText
        )}
      </>
    )}
  </div>
);

export default Card;
