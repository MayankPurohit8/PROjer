import { Eye, EyeClosed } from "lucide-react";
import SocialLogin from "./SocialLogin";
import { useNavigate } from "react-router";
import { useState } from "react";
const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="py-4 px-3 w-full h-full relative">
        <div
          onClick={() => navigate("/register")}
          className="text-right  mb-15 cursor-pointer text-sm text-gray-400 hover:text-black active:text-black"
        >
          Not a user?
        </div>
        <div className="text-5xl text-center font-heading">Welcome Back!</div>
        <div className="mt-7">
          <div className="space-y-5 px-3 flex flex-col justify-center h-full">
            <div className="space-y-2">
              <div className="">Enter Email</div>
              <div className="">
                <input
                  type="text"
                  className="focus:ring-1 border focus:outline-none focus:ring-violet-600 border-gray-600 py-2  px-3 w-full"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="">Enter Password</div>
              <div className="relative">
                <input
                  type={seePassword ? "text" : "password"}
                  className="focus:ring-1 border focus:outline-none focus:ring-violet-600 border-gray-600 py-2  px-3 w-full"
                  maxLength={15}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  onClick={() => setSeePassword(!seePassword)}
                  className="absolute right-2  top-2"
                >
                  {seePassword ? <Eye /> : <EyeClosed />}
                </div>
              </div>
            </div>
          </div>
          <div className="  mt-10 flex items-center justify-center">
            <div className="active:shadow-none py-2 px-3 shadow font-semibold text-xl bg-violet-300">
              Sign In
            </div>
          </div>
        </div>
        <div className="px-5 gap-2  flex items-center ">
          <div className="flex-1 border"></div>
          <div className="mt-5 text-lg">OR</div>
          <div className="flex-1 border "></div>
        </div>
        <div className="">
          <SocialLogin />
        </div>
      </div>
    </>
  );
};
export default LoginForm;
