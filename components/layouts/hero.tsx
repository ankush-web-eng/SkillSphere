import { useState } from "react";
import { Button } from "../ui/button";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <div
      className="flex flex-col md:flex-row md:py-10 md:w-screen max-md:space-y-6 max-md:px-4"
      id="hero"
    >
      <div className="flex flex-col md:py-20 md:px-12 md:w-1/2 max-md:space-y-6">
        <h1 className="text-5xl max-md:text-3xl font-semibold font-serif">
          DISCOVER THE EXCEPTIONAL SERVICES AT SKILL SPHERE
        </h1>
        <p className="text-gray-500 md:py-12">
          Let&apos;s start the journey of creativity to extend the horizon of
          success at SKILL SPHERE. <br />
          Elevate your brand with our comprehensive solutions—where imagination
          has no limits.
        </p>
        <strong className="pb-2">
          Welcome to our agency, where creativity meets innovation!
        </strong>
        <form className="flex md:space-x-6 space-x-2 items-center max-md:max-w-screen">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="rounded-sm py-2 md:px-4 px-1 text-black border-2 border-slate-600 "
            name="email"
            id="email"
          />
          <Button
            className="py-5"
            type="submit"
            size={"lg"}
            variant={"default"}
          >
            Explore
          </Button>
        </form>
        <p className="py-3 md:pt-10">At our agency, we offer a wide range of solutions in various domains to
        help you bring your ideas to life. Our team of talented experts is
        dedicated to delivering top-notch services tailored to your needs,
        ensuring your projects stand out in today&apos;s competitive market.</p>
      </div>
      <div className="md:w-1/2 w-full md:h-auto h-80 flex justify-center">
        <div className="px-3 bg-slate-500 w-5/6 h-full"></div>
      </div>
    </div>
  );
}
