import { motion } from "framer-motion";

const transition = (Component) => {
  return () => (
    <>
      <Component />
      {/* <motion.div
        className="fixed top-0 left-0 w-full min-h-screen bg-white origin-bottom z-[100]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      /> */}
      <motion.div
        className="fixed top-0 left-0 w-full grid place-items-center text-white min-h-screen home origin-left z-[100]"
        initial={{ opacity: 1, scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2, duration: 2, ease: [0.6, 1.38, 0.71, 1.66] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full grid place-items-center text-white min-h-screen def origin-top z-[100]"
        initial={{ opacity: 1, scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 2, ease: [0.6, 1.38, 0.77, 0.5] }}
      >
        <motion.p
          className="text-3xl font-bold"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          // style={{ display: "inline" }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          IKENNA.
        </motion.p>
      </motion.div>
    </>
  );
};

export default transition;
