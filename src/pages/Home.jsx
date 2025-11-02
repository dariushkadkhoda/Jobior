import { Location, SearchNormal1 } from "iconsax-reactjs";
import Container from "../components/Container";

let bestJob = [
  "part time",
  "full-time",
  "internship",
  "part time",
  "full-time",
  "internship",
  "part time",
  "full-time",
  "internship",
  "part time",
  "full-time",
  "internship",
  "part time",
  "full-time",
  "internship",
];
function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mb-12">
        <Container>
          {/* Title */}
          <div className="text-center pb-10">
            <h2 className="font-semibold text-4xl text-gray-900">
              Start Your Job Journey
            </h2>
          </div>

          {/* Search Box */}
          <form className="flex flex-col items-center justify-center pb-16">
            <div className="flex items-center justify-between w-10/12 max-w-4xl h-20 border-2 border-gray-200 rounded-full shadow-sm px-4">
              {/* Job Input */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Junior / Intern Position"
                  className="w-full h-full bg-transparent outline-none text-xl placeholder:text-gray-400 px-6"
                />
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-gray-200"></div>

              {/* Location */}
              <div className="flex flex-1 items-center px-6">
                <Location size="28" color="#9CA3AF" className="mr-2" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-transparent outline-none text-xl placeholder:text-gray-400"
                />
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white rounded-full h-14 w-14 flex items-center justify-center mr-2"
              >
                <SearchNormal1 size="22" color="#fff" />
              </button>
            </div>

            {/* Employer Link */}
            <div className="flex items-center gap-2 mt-6">
              <p className="text-lg text-gray-700">Employers?</p>
              <a
                href="#"
                className="text-green-600 text-xl font-medium hover:underline"
              >
                Post your job here
              </a>
            </div>
          </form>
          <div className="space-x-2 gap-y-2.5 flex flex-wrap justify-center">
          {bestJob.map((item,index)=>(
            <a key={index} className="px-4 py-2 text-lg border rounded-3xl border-none outline-none bg-PShades-150 text-white hover:border-black">
              {item}
            </a>
          ))}
          </div>
        </Container>
      </section>

      {/* Jobs */}
      <section className="bg-pink-500">
        <Container>Jobs</Container>
      </section>

      {/* Banner */}
      <section className="bg-STints-300">banner</section>

      {/* Top Companies */}
      <section className="bg-indigo-500">Companies</section>

      {/* Get The App */}
      <section className="bg-lime-700">App</section>
    </>
  );
}

export default Home;
