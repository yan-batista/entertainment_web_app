import { IconProps } from "../../types/IconTypes";

export const CloseIcon: React.FC<IconProps> = ({ className, fill, viewbox, stroke }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${viewbox ? viewbox : "0 0 20 20"}`}
      fill={fill ? fill : "currentColor"}
      stroke={stroke ? stroke : "none"}
      className={className}
    >
      <g>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </g>
    </svg>
  );
};
