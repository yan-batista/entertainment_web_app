import { ReactNode } from "react";

interface IconProps {
  path: ReactNode;
  viewbox: string;
  logo?: boolean;
}

const IconBase: React.FC<IconProps> = ({ path, viewbox, logo }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewbox}
      fill="currentColor"
      stroke="none"
      className={`${logo ? "fill-logo w-6 h-6 lg:w-7 lg:h-7" : "fill-icon w-5 h-5"} hover:fill-logo`}
    >
      {path}
    </svg>
  );
};

export const createIcon = (path: ReactNode, viewbox: string, logo?: boolean) => {
  const Icon = () => <IconBase path={path} viewbox={viewbox} logo={logo} />;
  return Icon;
};
