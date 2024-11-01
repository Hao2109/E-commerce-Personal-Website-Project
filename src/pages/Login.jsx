import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000, // Thời gian chuyển động (ms)
      easing: "ease-in-sine", // Hiệu ứng chỉ chạy một lần khi cuộn vào
    });
  }, []);
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <div data-aos="fade-right">
      <form
        onSubmit={onSubmitHandler}
        action=""
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mt-10 mb-2">
          <p className="text-3xl prata-regular">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
            required
          />
        )}
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign up")}
              className="cursor-pointer"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer"
            >
              Login Here
            </p>
          )}
        </div>
        <button className="px-8 py-2 mt-4 font-light text-white bg-black ">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
