import { NavLink } from "react-router-dom";
import { LogoIcon } from "../Components/Icons";

const SignUpPage = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-9">
      <LogoIcon className="w-8 h-8 fill-logo lg:w-8 lg:h-8" viewbox={"0 0 33 27"} />
      <div className="bg-side rounded-md p-6 flex flex-col items-center">
        <h1 className="text-xl w-full text-left md:text-3xl">Sign Up</h1>
        <form className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Email Address"
            className="bg-transparent border-b border-icon py-4 outline-none indent-4"
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-transparent border-b border-icon py-4 outline-none indent-4"
          />
          <input
            type="text"
            placeholder="Repeat Password"
            className="bg-transparent border-b border-icon py-4 outline-none indent-4"
          />
          <input type="submit" value="Create an account" className="bg-logo text-white px-8 py-4 rounded-md my-5" />
        </form>
        <p>
          Already have an account?{" "}
          <NavLink to="/login" className="text-logo">
            Login
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default SignUpPage;
