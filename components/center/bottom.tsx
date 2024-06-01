import { Button } from "../ui/button";

export default function Bottom() {
  return (
    <div className="w-full py-6">
      <div className="bg-gray-600 flex-col py-4 px-4 flex items-center justify-center">
        <h1 className="text-white text-3xl pt-6">Contact Us</h1>
        <p className="py-2 max-md:text-center">
          {" "}
          LET&apos;S DRAW A WIRE TO COMMUNICATE WITH AN AIM TO TOUCH THE HEIGHTS
          OF AN ENDLESS SKY.{" "}
        </p>
        <p className="py-2 max-md:text-center">
          GIVE US A CHANCE TO SERVE YOU THE BEST.
        </p>
        <div className="py-4"></div>
        <Button
          variant={"default"}
          className="bg-white hover:text-gray-500 text-black rounded-full px-6 py-1"
        >
          LET&apos;S COMMUNICATE
        </Button>
        <div className="py-6"></div>
      </div>
    </div>
  );
}
