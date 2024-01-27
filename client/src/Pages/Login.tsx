import { NavLink } from "react-router-dom";
import { LogoIcon } from "../Components/Icons";
import { loginService } from "../services/userRequests";

interface LoginPageProps {
  setCookie: any;
}

const LoginPage: React.FC<LoginPageProps> = ({ setCookie }: LoginPageProps) => {
  //const navigate = useNavigate();

  function onSubmitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formTarget = event.currentTarget;
    const user_email: HTMLInputElement | null = formTarget.querySelector("#user_email");
    const user_password: HTMLInputElement | null = formTarget.querySelector("#user_password");

    // validate

    if (user_email && user_password) {
      loginService(user_email.value, user_password.value, setCookie);
    }
  }

  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-9">
      <LogoIcon className="w-8 h-8 fill-logo lg:w-8 lg:h-8" viewbox={"0 0 33 27"} />
      <div className="bg-side rounded-md p-6 flex flex-col items-center">
        <h1 className="text-xl w-full text-left md:text-3xl">Login</h1>
        <form className="flex flex-col gap-4 mt-4" onSubmit={onSubmitLogin}>
          <input
            type="text"
            id="user_email"
            name="user_email"
            placeholder="Email Address"
            className="bg-transparent border-b border-icon py-4 outline-none indent-4"
          />
          <input
            type="password"
            id="user_password"
            name="user_password"
            placeholder="Password"
            className="bg-transparent border-b border-icon py-4 outline-none indent-4"
          />
          <input
            type="submit"
            value="Login to your account"
            className="bg-logo text-white px-8 py-4 rounded-md my-5 cursor-pointer"
          />
        </form>
        <p>
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-logo">
            Sign Up
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
