import { IconProps } from "../../types/IconTypes";

export const PlayIcon: React.FC<IconProps> = ({ className, fill, viewbox, stroke }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${viewbox ? viewbox : "0 0 20 20"}`}
      fill={fill ? fill : "currentColor"}
      stroke={stroke ? stroke : "none"}
      className={className}
    >
      <path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"></path>
    </svg>
  );
};
