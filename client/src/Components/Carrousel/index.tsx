import { ReactNode } from "react";

interface CarrouselProps {
  children: ReactNode;
}

const Carrousel: React.FC<CarrouselProps> = ({ children }: CarrouselProps) => {
  return (
    <div id="carrousel" className="w-full h-fit pb-4 overflow-x-scroll flex flex-row gap-4">
      <div></div>
      {children}
      <div></div>
    </div>
  );
};

export default Carrousel;
