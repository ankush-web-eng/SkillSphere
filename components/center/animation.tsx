import { MdArrowOutward } from "react-icons/md";

export default function Animation() {
  return (
    <div className="py-12 md:px-6 flex flex-col max-md:items-center md:flex-row">
      <div className="bg-gray-300 h-80 w-80"></div>
      <div className="md:w-5/6 w-screen right-0 flex flex-col">
        <div className="flex flex-col text-gray-500 px-12 pt-8">
          <h1 className="py-3 text-2xl font-bold text-gray-500">OUR SKILLS</h1>
          <p className="pt-2 w-1/2 max-md:w-full">
            {" "}
            Whether you are looking to establish a strong online presence
            through web development, engage your audience with compelling
            content writing, captivate them with stunning visuals{" "}
          </p>
        </div>


        <div className="flex space-x-2 px-6 md:w-full w-screen max-md:overflow-hidden max-md:overflow-x-scroll max-md:py-6">

          <div className="md:w-1/6 w-96 rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-400 w-full h-full p-2">
              Whether you are looking to establish a strong online presence
              through web development, engage your audience with compelling
            </div>
            <div className="flex items-center space-x-2">
              Skill name <MdArrowOutward />
            </div>
          </div>


          <div className="md:w-1/6 w-96 rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-400 w-full h-full p-2">
              Whether you are looking to establish a strong online presence
              through web development, engage your audience with compelling
            </div>
            <div className="flex items-center space-x-2">
              Skill name <MdArrowOutward />
            </div>
          </div>


          <div className="md:w-1/6 w-96 rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-400 w-full h-full p-2">
              Whether you are looking to establish a strong online presence
              through web development, engage your audience with compelling
            </div>
            <div className="flex items-center space-x-2">
              Skill name <MdArrowOutward />
            </div>
          </div>


          <div className="md:w-1/6 w-96 rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-400 w-full h-full p-2">
              Whether you are looking to establish a strong online presence
              through web development, engage your audience with compelling
            </div>
            <div className="flex items-center space-x-2">
              Skill name <MdArrowOutward />
            </div>
          </div>


          <div className="md:w-1/6 w-96 rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-400 w-full h-full p-2">
              Whether you are looking to establish a strong online presence
              through web development, engage your audience with compelling
            </div>
            <div className="flex items-center space-x-2">
              Skill name <MdArrowOutward />
            </div>
          </div>


          <div className="md:w-1/6 w-96 rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-400 w-full h-full p-2">
              Whether you are looking to establish a strong online presence
              through web development, engage your audience with compelling
            </div>
            <div className="flex items-center space-x-2">
              Skill name <MdArrowOutward />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
