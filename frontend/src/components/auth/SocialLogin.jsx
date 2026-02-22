import google from "../../assets/google.png";
import github from "../../assets/github.png";
const SocialLogin = () => {
  return (
    <>
      <div className="space-y-3 py-3">
        <div className="text-center">Sign in using</div>
        <div className="flex *:h-8 gap-5 justify-center *:cursor-pointer">
          <img src={google} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
    </>
  );
};
export default SocialLogin;
