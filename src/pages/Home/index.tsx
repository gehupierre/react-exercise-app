import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-32 mt-12 space-y-10 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            We help you build better products
          </h1>
          <p className="max-w-sm text-center text-grey-700 md:text-left">
            Pierre Studios assists software teams with day-to-day tasks and
            bring complex software projects to life.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to=""
              className="p-3 px-6 pt-3 text-white bg-blue-400 rounded-full baseline hover:bg-blue-800"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
