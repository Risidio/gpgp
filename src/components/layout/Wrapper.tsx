import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className="max-w-[1440px] mx-auto">{children}</div>;
};

export default Wrapper;
