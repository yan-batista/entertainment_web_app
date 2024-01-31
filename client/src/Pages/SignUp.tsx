import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogoIcon } from "../Components/Icons";

interface SignUpPageError {
  message: string;
  exists: boolean;
}

const SignUpPage = () => {
  const [error, setError] = useState<SignUpPageError>({ message: "", exists: false });

  async function onSubmitSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formTarget = event.currentTarget;
    const user_email: HTMLInputElement | null = formTarget.querySelector("#user_email");
    const user_password: HTMLInputElement | null = formTarget.querySelector("#user_password");

    // if both fields exists
    if (user_email && user_password) {
      // validate data
      if (!validateData(user_email.value, user_password.value)) return;

      // Make a login request
      try {
        /* login();
        await loginService(user_email.value, user_password.value);
        navigate("/"); */
      } catch (error: any) {
        setError({
          message: error.message,
          exists: true,
        } as SignUpPageError);
      }
    }
  }

  function validateData(user_email: string, user_password: string) {
    // if one or all required fields are empty
    if (!user_email || !user_password) {
      setError({
        message: "All fields are required",
        exists: true,
      });

      return false;
    }

    // if email is invalid
    if (user_email && !validateEmail(user_email)) {
      setError({
        message: "Email invalid",
        exists: true,
      });

      return false;
    }

    // if password is invalid
    if (user_password && !validatePassword(user_password)) {
      setError({
        message: "Password invalid",
        exists: true,
      });

      return false;
    }

    return true;
  }

  function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  function validatePassword(password: string): boolean {
    // Define password strength requirements
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    // Check if password meets all requirements
    return password.length >= minLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  }
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-9">
      <NavLink to="/">
        <LogoIcon className="w-8 h-8 fill-logo lg:w-8 lg:h-8" viewbox={"0 0 33 27"} />
      </NavLink>
      <div className="bg-side rounded-md p-6 flex flex-col items-center">
        <h1 className="text-xl w-full text-left md:text-3xl">Sign Up</h1>
        <form className="flex flex-col gap-4 mt-4" onSubmit={onSubmitSignUp}>
          <input
            type="text"
            id="user_email"
            name="user_email"
            placeholder="Email Address"
            className={`bg-transparent border-b ${error.exists ? "border-logo" : "border-icon"} py-4 outline-none indent-4`}
          />
          <input
            type="password"
            id="user_password"
            name="user_password"
            placeholder="Password"
            className={`bg-transparent border-b ${error.exists ? "border-logo" : "border-icon"} py-4 outline-none indent-4`}
          />
          <p className={`${error.exists ? "visible" : "invisible"} text-logo`}>{error.message}</p>
          <input
            type="submit"
            value="Login to your account"
            className="bg-logo text-white px-8 py-4 rounded-md mb-5 cursor-pointer"
          />
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
