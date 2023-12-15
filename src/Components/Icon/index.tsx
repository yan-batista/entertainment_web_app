import { ReactNode } from "react";

interface IconProps {
  path: ReactNode;
  viewbox: string;
  logo?: boolean;
  style?: string;
  fill?: boolean;
  stroke?: boolean;
}

const IconBase: React.FC<IconProps> = ({ path, viewbox, logo, style, fill, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewbox}
      fill={`${fill ? "currentColor" : ""}`}
      stroke={`${stroke ? "currentColor" : ""}`}
      className={`${
        logo ? "fill-logo w-6 h-6 lg:w-8 lg:h-8" : "fill-icon w-5 h-5 lg:w-5 lg:h-5"
      } hover:fill-logo ${style}`}
    >
      {path}
    </svg>
  );
};

export const createIcon = (
  path: ReactNode,
  viewbox: string,
  logo?: boolean,
  style?: string,
  fill?: boolean,
  stroke?: boolean
) => {
  const Icon = () => <IconBase path={path} viewbox={viewbox} logo={logo} style={style} fill={fill} stroke={stroke} />;
  return Icon;
};
