import "./styles/main.scss";

import { FC, ReactElement } from "react";

type ZUIProviderProps = {
  children: ReactElement<any, any>;
};

const ZUIProvider: FC<ZUIProviderProps> = ({ children }) => {
  return children;
};

export default ZUIProvider;
