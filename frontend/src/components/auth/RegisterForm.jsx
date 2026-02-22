import { useState } from "react";
import SocialLogin from "./SocialLogin";
import { useNavigate } from "react-router";
import { Eye, EyeClosed } from "lucide-react";
const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  return (
    <>
      <div className="py-4 px-3 w-full h-full relative">
        <div
          onClick={() => navigate("/login")}
          className="text-right  mb-15 text-sm text-gray-400 hover:text-black active:text-black cursor-pointer"
        >
          Already a user?
        </div>
        <div className="text-5xl text-center font-heading">
          Create new Account
        </div>
        <div className="mt-5">
          <div className="space-y-4  px-3 flex flex-col justify-center h-full">
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="">Enter Name</div>
                <div className="">
                  <input
                    type="text"
                    className="focus:ring-1 border focus:outline-none focus:ring-violet-600 border-gray-600 py-2  px-3 w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="">Enter Email</div>
              <div className="">
                <input
                  type="text"
                  className="focus:ring-1 border focus:outline-none focus:ring-violet-600 border-gray-600 py-2  px-3 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
            <div className="space-y-2">
              <div className="">Confirm Password</div>
              <div className="relative">
                <input
                  type={seeConfirmPassword ? "text" : "password"}
                  className="focus:ring-1 border focus:outline-none focus:ring-violet-600 border-gray-600 py-2  px-3 w-full"
                  maxLength={15}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
                  className="absolute right-2  top-2"
                >
                  {seeConfirmPassword ? <Eye /> : <EyeClosed />}
                </div>
              </div>
            </div>
          </div>
          <div className="  mt-10 flex items-center justify-center">
            <div className="active:shadow-none py-2 px-3 shadow font-semibold text-xl bg-violet-300">
              Sign Up
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
export default RegisterForm;
