import { ReactNode } from "react";

interface CarrouselProps {
  children: ReactNode;
}

const Carrousel: React.FC<CarrouselProps> = ({ children }: CarrouselProps) => {
  return (
    <div id="carrousel" className="w-full h-44 overflow-x-scroll flex flex-row gap-4 pb-6 px-5">
      {children}
    </div>
  );
};

export default Carrousel;
