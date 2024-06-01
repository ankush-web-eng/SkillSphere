import { MdArrowOutward } from "react-icons/md";

export default function Animation() {
  return (
    <div className="py-12 md:px-6 flex flex-col max-md:items-center md:flex-row">
      <div className="bg-gray-300 h-80 w-80 md:mt-36">
        <video className="h-full w-full" autoPlay loop muted>
          <source src="/Animation.mp4" />
        </video>
      </div>
      <div className="md:w-5/6 w-screen right-0 flex flex-col">
        <div className="flex flex-col text-gray-500 px-12 pt-8">
          <h1 className="py-3 text-2xl font-bold text-gray-500">OUR SKILLS</h1>
          <p className="pt-2 w-1/2 max-md:w-full">
            {" "}
            A brief update on what we offer:
          </p>
        </div>

        <div className="flex space-x-2 px-6 md:w-full w-screen max-md:overflow-hidden max-md:overflow-x-scroll max-md:py-6">
          <div className="md:w-1/5 w-screen rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-200 w-full h-full p-2">
              From engaging blog posts and informative articles to captivating
              website copy and compelling social media content to research
              journals, our team of Shakespeare delivers tailored solutions that
              resonate with your audience and drive results. We understand the
              power of storytelling and strive to craft content that not only
              informs but also inspires action.
            </div>
            <div className="flex items-center space-x-2">
              Content Writing <MdArrowOutward />
            </div>
          </div>

          <div className="md:w-1/5 w-screen rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-200 w-full h-full p-2">
              We specialize in crafting bespoke websites that not only captivate
              audiences&apos; eye but also drive meaningful results for your
              business. From intuitive user interfaces to seamless backend
              functionality, our experienced TECHO-GUYZ leverages the latest
              technologies and best practices to bring your vision to life.
            </div>
            <div className="flex items-center space-x-2">
              Web Development <MdArrowOutward />
            </div>
          </div>

          <div className="md:w-1/5 w-screen rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-200 w-full h-full p-2">
              From eye-catching logos and impactful branding materials to
              engaging social media graphics and compelling marketing
              collateral, we offer a full spectrum of design solutions tailored
              to your needs. Our team of ARTISTS delivers tailored solutions
              that resonate with your audience and drive results.
            </div>
            <div className="flex items-center space-x-2">
              Graphic Designing <MdArrowOutward />
            </div>
          </div>

          <div className="md:w-1/5 w-screen rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-200 w-full h-full p-2">
              Whether you&apos;re a content creator, marketer, or business
              owner, we provide tailored video editing solutions to meet your
              specific needs and goals. From corporate videos and promotional
              content to social media clips and event highlights, we offer a
              full range of editing services to bring your vision to life. We
              ensure that every frame is polished to perfection, delivering
              videos that leave a lasting impression.
            </div>
            <div className="flex items-center space-x-2">
              Video Editing <MdArrowOutward />
            </div>
          </div>

          <div className="md:w-1/5 w-screen rounded-sm md:h-full h-fit flex flex-col space-y-2">
            <div className="bg-gray-200 w-full h-full p-2">
              From explainer videos and product demos to animated logos and
              motion graphics. With a keen eye for detail and a passion for
              creativity, we transform concepts into engaging animations that
              resonate with your audience and leave a lasting impression.
              Whether you&apos;re looking to educate, entertain, or inspire, we have
              the expertise to deliver animations that elevate your brand and
              drive results.
            </div>
            <div className="flex items-center space-x-2">
              2D Animations <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
