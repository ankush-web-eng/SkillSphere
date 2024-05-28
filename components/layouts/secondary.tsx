import { Button } from "../ui/button";

export default function Secondary() {
  return (
    <div className="md:pt-6 pt-3 flex md:flex-row flex-col">

      <div className="md:w-1/2 w-screen flex flex-col md:pt-12 pt-6 md:px-20">
        <div className="md:w-3/4 w-screen">
        <h1 className="text-3xl text-gray-700 py-8">Subheading</h1>
        <p className="pt-8 text-gray-500 text-sm max-md:px-3">
          From Web develpoment to Video Editing, our team of experts delivers
          tailor-made solutions that exceed your expectations.
        </p>
        <Button variant={"ghost"} className="w-fit pb-6 pt-6">
          Explore Now
        </Button>
        <p className="pt-8 text-sm opacity-0 max-md:hidden">
          At Skill Sphere, we believe in the power of collaboration. Our team of
          talented freelancers works together seamlessely to provide
          comprehensive solutions that cater:
        </p>
        </div>
      </div>

    <div className="md:h-auto md:w-3/4 w-screen h-80 max-md:items-center left-0 flex flex-col">
        <div className="right-6 w-5/6 bg-slate-700 h-full"></div>
    </div>

    </div>
  );
}