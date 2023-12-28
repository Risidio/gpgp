import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return <section className="max-w-[1440px] mx-auto md:px-[15px]">{children}</section>;
};

export default Wrapper;
