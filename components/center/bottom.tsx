import { Button } from "../ui/button";

export default function Bottom() {
  return (
    <div className="w-full py-6">
      <div className="bg-gray-700 flex-col py-4 px-4 flex items-center justify-center">
        <h1 className="text-white text-3xl pt-6">Contact Us</h1>
        <p className="py-2 max-md:text-center">
          {" "}
          Whether you are looking to establish a strong online presence through
          web development, engage your audience with compelling{" "}
        </p>
        <div className="py-4"></div>
        <Button
          variant={"default"}
          className="bg-white hover:text-gray-500 text-black rounded-full px-6 py-1"
        >
          GET IN TOUCH
        </Button>
        <div className="py-6"></div>
      </div>
    </div>
  );
}
