export default function Footer() {
  return (
    <div className="md:w-screen py-6 px-8 flex text-sm max-md:text-[10px]">
      <div className="w-1/4 flex flex-col text-gray-400">
        <div className="bg-gray-500 md:w-32 md:h-32 h-12 w-12"></div>
        <div className="w-1/2 py-2">
          &#169; 2024 SKill Sphere Inc. All Rights Reserved
        </div>
      </div>
      <div className="w-1/4 flex flex-col text-gray-400 md:space-y-3 space-y-1">
        <h1 className="text-gray-600">Quick Links</h1>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>md:
      </div>
      <div className="w-1/4 flex flex-col text-gray-400 md:space-y-3 space-y-1">
        <h1 className="text-gray-600">Explore More</h1>
        <p>Web Development & Design</p>
        <p>Video Editing with Motion Graphics</p>
        <p>Graphic Design & Animations</p>
        <p>Content Writing</p>
      </div>
      <div className="w-1/4 flex flex-col text-gray-400 md:space-y-3 space-y-1">
        <h1 className="text-gray-600">Connect With Us</h1>
        <p>Instagram</p>
        <p>LinkedIn</p>
      </div>
    </div>
  );
}
