import { LogoIcon, GridIcon, MovieIcon, TVIcon } from "../Icon/Icons/";
import Avatar from "../../assets/image-avatar.png";

const Nav = () => {
  return (
    <nav
      className="flex flex-row items-center justify-between bg-side p-6 lg:p-7
    md:rounded-2xl
    lg:flex-col lg:justify-start lg:w-fit lg:h-full"
    >
      <LogoIcon />

      <div className="media-type-icons flex flex-row items-center gap-6 lg:flex-col lg:gap-7 lg:mt-16">
        <GridIcon />
        <MovieIcon />
        <TVIcon />
      </div>

      <img src={Avatar} className="w-7 h-7 border border-white rounded-full lg:w-8 lg:h-8 lg:mt-auto" />
    </nav>
  );
};

export default Nav;
