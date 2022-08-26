export default function Nav() {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="site-logo pt-2">
          <img src="/img/logo.png" alt="Pierre Studios" className="h-12" />
        </div>
        <div className="menu-items hidden md:flex space-x-6">
          <a href="#" className="hover:text-slate-500">
            Get a quote
          </a>
          <a href="#" className="hover:text-slate-500">
            Services
          </a>
          <a href="#" className="hover:text-slate-500">
            Resources
          </a>
        </div>
        <a
          href=""
          className="hidden md:block-disabled p-3 px-6 pt-3 text-white bg-blue-400 rounded-full baseline hover:bg-blue-800"
        >
          Get a quote
        </a>

        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div
          id="mobile-menu"
          className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#" className="">
            Get a quote
          </a>
          <a href="#" className="">
            Services
          </a>
          <a href="#" className="">
            Resources
          </a>
        </div>
      </div>
    </nav>
  );
}
