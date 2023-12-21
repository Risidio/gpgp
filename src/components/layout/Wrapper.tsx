import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return <section className="max-w-[1440px] mx-auto">{children}</section>;
};

export default Wrapper;
