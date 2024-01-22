import { NavLink, Outlet } from "react-router-dom";
import Avatar from "../../assets/image-avatar.png";
import { GridIcon, LogoIcon, MovieIcon, TVIcon } from "../Icons";

const Nav = () => {
  return (
    <>
      <nav
        className="flex flex-row items-center justify-between bg-side p-6 lg:p-7
                  md:rounded-2xl
                  lg:flex-col lg:justify-start lg:w-fit lg:h-full lg:sticky lg:top-0"
      >
        <div className="media-type-icons flex flex-row items-center gap-6 lg:flex-col lg:gap-7 ">
          <LogoIcon className="w-6 h-6 fill-logo lg:w-8 lg:h-8" viewbox={"0 0 33 27"} />
        </div>

        <div className="media-type-icons flex flex-row items-center gap-6 lg:flex-col lg:gap-7 lg:mt-16">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "inactive")}>
            {({ isActive }) => (
              <GridIcon
                className={`w-5 h-5 lg:w-6 lg:h-6 hover:fill-logo cursor-pointer ${
                  isActive ? "fill-white" : "fill-icon"
                }`}
              />
            )}
          </NavLink>

          <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            {({ isActive }) => (
              <MovieIcon
                className={`w-5 h-5 lg:w-6 lg:h-6 hover:fill-logo cursor-pointer ${
                  isActive ? "fill-white" : "fill-icon"
                }`}
              />
            )}
          </NavLink>

          <NavLink to="/series" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            {({ isActive }) => (
              <TVIcon
                className={`w-5 h-5 lg:w-6 lg:h-6 hover:fill-logo cursor-pointer ${
                  isActive ? "fill-white" : "fill-icon"
                }`}
              />
            )}
          </NavLink>
        </div>

        <NavLink to="/login" className="lg:mt-auto">
          <img src={Avatar} className="w-7 h-7 border border-white rounded-full lg:w-8 lg:h-8 cursor-pointer" />
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
