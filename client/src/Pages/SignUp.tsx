import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LogoIcon } from "../Components/Icons";
import { signupService } from "../services/userRequests";

interface SignUpPageError {
  message: string;
  exists: boolean;
}

const SignUpPage = () => {
  const [error, setError] = useState<SignUpPageError>({ message: "", exists: false });
  const [formData, setFormData] = useState({ user_email: "", user_password: "", user_confirm_password: "" });
  const [passwordRequirements, setPasswordRequirements] = useState({
    passwordLength: false,
    hasNumber: false,
    hasUppercase: false,
    hasLowercase: false,
    hasSpecial: false,
  });
  const navigate = useNavigate();

  /**
   * This function is responsible to handle any changes in the form inputs
   * user email, user password and user confirm password.
   *
   * I will get the changed element through the event, and extract its name and value.
   * Then, it sets the formData state to all current values, and change whatver input is being change
   * through the "name", and sets it to "value"
   */
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  /**
   * This function is responsible to handle the form submit.
   *
   * First, it tries to validate the data, then uses the service to try to make a request,
   * clearing the form and sending the user to the login page if the request is successfull.
   *
   * If there is some kind of error, it will be displayed to the user.
   */
  async function onSubmitSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // validate data
    if (!validateData(formData.user_email, formData.user_password, formData.user_confirm_password)) return;

    // Make a signup request
    try {
      console.log(formData.user_password, formData.user_confirm_password);
      await signupService(formData.user_email, formData.user_password, formData.user_confirm_password);
      setFormData({ user_email: "", user_password: "", user_confirm_password: "" });
      navigate("/login");
    } catch (error: any) {
      console.error(error.message);
    }
  }

  /**
   * This function is responsible to validate the form data
   *
   * It checks if:
   *  All fields are not empty
   *  Email is valid
   *  Password is valid
   */
  function validateData(user_email: string, user_password: string, user_confirm_password: string) {
    // if one or all required fields are empty
    if (!user_email || !user_password || !user_confirm_password) {
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
    if (user_password && !validatePassword()) {
      return false;
    }

    if (user_password !== user_confirm_password) {
      setError({
        message: "Passwords must match",
        exists: true,
      });
    }

    return true;
  }

  /**
   * This function checks if email is valid through a regex function
   *
   * Used by the validateData function to check if email is valid
   */
  function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  /**
   * This function checks if formData.user_password is valid
   *
   * Used by the validateData function to check if password is valid
   */
  function validatePassword(): boolean {
    // Check if password meets all requirements
    return (
      passwordRequirements.passwordLength &&
      passwordRequirements.hasUppercase &&
      passwordRequirements.hasLowercase &&
      passwordRequirements.hasNumber &&
      passwordRequirements.hasSpecial &&
      formData.user_password === formData.user_confirm_password
    );
  }

  /**
   * This function is responsible to show the user the password requirements.
   *
   * A valid password requires (>= 8 letters, number, lowercase, uppercase and special char).
   * This function will display what the user still have to add, and what is missing.
   */
  function onTypeCheckRequirements(event: React.ChangeEvent<HTMLInputElement>) {
    const password = event.currentTarget.value;

    const minLength = 8;
    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

    if (password.length >= minLength) {
      setPasswordRequirements((prevState) => ({ ...prevState, passwordLength: true }));
    } else {
      setPasswordRequirements((prevState) => ({ ...prevState, passwordLength: false }));
    }

    if (hasUppercase) {
      setPasswordRequirements((prevState) => ({ ...prevState, hasUppercase: true }));
    } else {
      setPasswordRequirements((prevState) => ({ ...prevState, hasUppercase: false }));
    }

    if (hasLowercase) {
      setPasswordRequirements((prevState) => ({ ...prevState, hasLowercase: true }));
    } else {
      setPasswordRequirements((prevState) => ({ ...prevState, hasLowercase: false }));
    }

    if (hasNumber) {
      setPasswordRequirements((prevState) => ({ ...prevState, hasNumber: true }));
    } else {
      setPasswordRequirements((prevState) => ({ ...prevState, hasNumber: false }));
    }

    if (hasSpecial) {
      setPasswordRequirements((prevState) => ({ ...prevState, hasSpecial: true }));
    } else {
      setPasswordRequirements((prevState) => ({ ...prevState, hasSpecial: false }));
    }
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
            defaultValue={formData.user_email}
            onChange={handleChange}
          />
          <input
            type="password"
            id="user_password"
            name="user_password"
            placeholder="Password"
            className={`bg-transparent border-b ${error.exists ? "border-logo" : "border-icon"} py-4 outline-none indent-4`}
            defaultValue={formData.user_password}
            onChange={(event) => {
              onTypeCheckRequirements(event);
              handleChange(event);
            }}
          />
          <input
            type="password"
            id="user_confirm_password"
            name="user_confirm_password"
            placeholder="Confirm Password"
            className={`bg-transparent border-b ${error.exists ? "border-logo" : "border-icon"} py-4 outline-none indent-4`}
            defaultValue={formData.user_confirm_password}
            onChange={handleChange}
          />
          <p className={`${error.exists ? "visible" : "invisible"} text-logo`}>{error.message}</p>
          <div className="flex flex-col gap-1">
            <p>Password must:</p>
            <div className="indent-1">
              <p
                id="passwordLength_required"
                className={`${passwordRequirements.passwordLength ? "text-green-300" : "text-white"}`}
              >
                be 8 characters long
              </p>
              <p
                id="uppercase_required"
                className={`${passwordRequirements.hasUppercase ? "text-green-300" : "text-white"}`}
              >
                have 1 uppercase letter
              </p>
              <p
                id="lowercase_required"
                className={`${passwordRequirements.hasLowercase ? "text-green-300" : "text-white"}`}
              >
                have 1 lowercase letter
              </p>
              <p id="number_required" className={`${passwordRequirements.hasNumber ? "text-green-300" : "text-white"}`}>
                have 1 number
              </p>
              <p
                id="special_required"
                className={`${passwordRequirements.hasSpecial ? "text-green-300" : "text-white"}`}
              >
                have 1 special character
              </p>
            </div>
          </div>
          <input
            type="submit"
            value="Create Account"
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
