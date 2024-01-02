import { ReactNode } from "react";

interface CarrouselProps {
  children: ReactNode;
}

const Carrousel: React.FC<CarrouselProps> = ({ children }: CarrouselProps) => {
  return (
    <div id="carrousel" className="w-full h-[150px] overflow-x-scroll flex flex-row gap-4">
      {children}
    </div>
  );
};

export default Carrousel;
