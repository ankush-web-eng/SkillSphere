import { motion } from "framer-motion";

export default function Floats() {
  return (
    <div className="md:h-screen py-12 h-auto flex md:flex-row flex-col">
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:1}}
        transition={{delay:0.3,duration:0.6,ease:'easeInOut'}}
        className="flex space-y-6 md:w-1/3 w-full items-center flex-col md:h-full"
      >
        <div className="bg-gray-500 md:w-5/6 md:h-1/2 w-80 h-60"></div>
        <div className="bg-gray-500 md:w-3/4 md:h-1/2 w-60 h-80"></div>
      </motion.div>

      <div className="flex flex-col items-center justify-around md:h-full md:w-1/3 space-y-10 max-md:py-12">
        <div className="text-gray-400 flex-col flex">
          <h1 className="text-2xl font-bold text-center text-gray-600">
            OUR WORKS
          </h1>
          <p className="text-center">
            ieuwfhnuiewn fejuiawj uwieajhfawfui uiawe fuhawefewaouihwfeu
            auwiefjuwae fjwafwauiefj ijeawfoiweaīf awefwke
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
          className="bg-gray-500 md:w-5/6 md:h-1/2 h-60 w-60 max-md:py-20"
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
        className="flex space-y-6 md:w-1/3 w-full items-center flex-col md:h-full"
      >
        <div className="bg-gray-500 md:w-3/4 md:h-1/2 w-60 h-80"></div>
        <div className="bg-gray-500 md:w-5/6 md:h-1/2 w-80 h-60"></div>
      </motion.div>
    </div>
  );
}
