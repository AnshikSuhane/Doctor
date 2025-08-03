import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side  */}
      <div className="md:w-1/2 flex flex-col justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg-text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight ">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col gap-3 md:flex-row items-center text-white text-sm font-light">
          <img src={assets.group_profiles} className="w-28 " />
          <p className="">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>
        <a
        href="#speciality"
          className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-gray-600 text-sm font-medium hover:scale-105 transition-all duration-300 self-start"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="" className="w-3" />
        </a>
      </div>
      {/* Right Side  */}
      <div className="md:w-1/2 relative ">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
