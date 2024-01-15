import { IconProps } from "../../types/IconTypes";

export const LogoIcon: React.FC<IconProps> = ({ className, fill, viewbox, stroke }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${viewbox ? viewbox : "0 0 20 20"}`}
      fill={fill ? fill : "currentColor"}
      stroke={stroke ? stroke : "none"}
      className={className}
    >
      <path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"></path>
    </svg>
  );
};
