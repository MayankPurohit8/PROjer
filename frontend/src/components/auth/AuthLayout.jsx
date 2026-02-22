import { motion } from "framer-motion";

const pageVariants1 = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};
const pageVariants2 = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};
const pageTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

const AuthLayout = ({ children, variant = "split" }) => {
  if (variant === "split") {
    return (
      <motion.div
        variants={pageVariants1}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="flex h-screen w-screen items-center justify-center overflow-hidden"
      >
        <div className="overflow-hidden flex w-7/10 h-8/10 border rounded-2xl shadow-2xl">
          <div className="bg-violet-200 flex flex-col items-center justify-center px-5 py-2 h-full w-6/10 font-semibold relative">
            <div className="absolute top-10 left-10 font-brand text-4xl">
              Projer
            </div>
            <div>
              <div className="text-5xl line-through decoration-red-500">
                WORK HARD
              </div>
              <div className="text-7xl">WORK SMART</div>
            </div>
          </div>
          <div className="h-full w-4/10">{children}</div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={pageVariants2}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="h-screen w-full flex overflow-hidden"
    >
      <div className="bg-violet-200 flex flex-col items-center justify-center px-5 py-2 h-full w-6/10 font-semibold relative">
        <div className="absolute top-10 left-10 font-brand text-4xl">
          Projer
        </div>
        <div>
          <div className="text-5xl line-through decoration-red-500">
            WORK HARD
          </div>
          <div className="text-7xl">WORK SMART</div>
        </div>
      </div>
      <div className="h-full w-4/10">{children}</div>
    </motion.div>
  );
};

export default AuthLayout;
