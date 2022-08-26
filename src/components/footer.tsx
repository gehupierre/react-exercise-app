export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-8 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-sm text-white md:hidden">
            Copyright &copy; 2022. All rights reserved.
          </div>
          <div>
            <img src="/img/logo.png" alt="Site Logo" className="h-10" />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form action="#">
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Get updates in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-blue-400 hover:bg-blue-100 focus:outline-none">
                Go
              </button>
            </div>
          </form>

          <div className="hidden mt-4 text-white text-sm md:block">
            Copyright &copy; 2022. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
