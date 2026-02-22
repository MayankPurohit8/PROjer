import { useNavigate } from "react-router";

const VerificationMailSent = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px] text-center space-y-6">
        <div className="text-5xl">📩</div>

        <h1 className="text-2xl font-semibold">Verify your email</h1>

        <p className="text-gray-600 text-sm">
          We’ve sent a verification link to <br />
          <span className="font-medium text-black">
            mayankpueohir888@gmail.com
          </span>
        </p>

        <p className="text-xs text-gray-500">
          Click the link in the email to activate your account.
        </p>

        <button className="w-full bg-violet-400 text-white py-2 rounded-lg hover:bg-violet-500 transition">
          Resend Email
        </button>

        <div
          onClick={() => navigate("/login")}
          className="block text-sm text-violet-600 hover:underline"
        >
          Back to login
        </div>
      </div>
    </div>
  );
};

export default VerificationMailSent;
