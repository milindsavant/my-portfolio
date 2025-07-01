import myprofile from "../../assets/my-profile.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row justify-center items-center p-10 md:p-20 space-y-10 md:space-y-0">
      {/* Text Section */}
      <div className="md:w-2/4 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          I am a passionate and enthusiastic MERN Stack Developer with a strong foundation in web development. Proficient in JavaScript , React.js , MongoDB, and Node.js, I am eager to contribute my skills and learn in a dynamic development environment.
        </p>
        <button className="mt-6 text-white py-2 px-6 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="#Footer">Contact Me</a>
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0">
        <img
          className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full mx-auto md:ml-8"
          src={myprofile}
          alt="My Profile"
          style={{
            objectPosition: 'top',
            border:'4px solid #465697' // Ensures the top of the image is visible
          }}
        />
      </div>
    </div>
  );
};

export default Home;
