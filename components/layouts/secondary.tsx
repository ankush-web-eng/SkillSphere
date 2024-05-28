import { Button } from "../ui/button";

export default function Secondary() {
  return (
    <div className="pt-6 flex md:flex-row flex-col">

      <div className="w-1/2 flex flex-col pt-12 md:px-20">
        <div className="w-3/4">
        <h1 className="text-3xl text-gray-700 py-8">Subheading</h1>
        <p className="pt-8 text-gray-500 text-sm">
          From Web develpoment to Video Editing, our team of experts delivers
          tailor-made solutions that exceed your expectations.
        </p>
        <Button variant={"ghost"} className="w-fit pb-6 pt-6">
          Explore Now
        </Button>
        <p className="pt-8 text-sm opacity-0">
          At Skill Sphere, we believe in the power of collaboration. Our team of
          talented freelancers works together seamlessely to provide
          comprehensive solutions that cater:
        </p>
        </div>
      </div>

    <div className="h-auto w-3/4 left-0 flex flex-col">
        <div className="right-6 w-5/6 bg-slate-700 h-full"></div>
    </div>

    </div>
  );
}
