import { Button } from "../ui/button";

export default function Secondary() {
  return (
    <div className="md:pt-6 pt-3 flex md:flex-row flex-col">
      <div className="md:w-1/2 w-screen flex flex-col md:pt-12 pt-6 md:px-20 px-3">
        <div className="md:w-3/4 w-screen">
          <h1 className="text-3xl text-gray-700 md:py-6 py-3 font-semibold font-serif">
            Our spheres of expertise
          </h1>
          <p className="md:pt-8 pt-2 pb-3 text-gray-500 text-sm ">
            We&apos;ve got you covered from professional web development and
            eye-catching graphic design to engaging content writing, captivating
            video editing, and stunning 3D animations.
          </p>
          <Button variant={"default"} className="w-fit pb-6 pt-6">
            Explore Now
          </Button>
          <p className="pt-8 text-sm opacity-0 max-md:hidden">
            At Skill Sphere, we believe in the power of collaboration. Our team
            of talented freelancers works together seamlessely to provide
            comprehensive solutions that cater:
          </p>
        </div>
      </div>

      <div className="md:h-auto md:w-3/4 w-screen h-80 max-md:items-center py-3 md:py-0 left-0 flex flex-col">
        <div className="right-6 w-5/6 bg-slate-700 h-full"></div>
      </div>
    </div>
  );
}
