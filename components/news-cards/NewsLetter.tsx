import { ArchiveX, CalendarDaysIcon } from "lucide-react";

export default function Newsletter() {
  return (
    <div className=" dark:bg-gray-900 dark:text-white text-black  py-8 shadow-md border rounded-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto ">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-3xl">
              Subscribe to our newsletter.
            </h2>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-50"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-8 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-inherit"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-4 font-semibold dark:text-white text-black">
                Weekly articles
              </div>
              <div className="mt-2 leading-7 text-gray-400">
                Subscribe to our weekly articles to get the latest news info,
                about our platform and deep market analysis
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <ArchiveX className="h-6 w-6 text-inherit" aria-hidden="true" />
              </div>
              <div className="mt-4 font-semibold dark:text-white text-black">
                No spam
              </div>
              <div className="mt-2 leading-7 text-gray-400">
                We promise not to spam your emails, as this will be delivered
                weekly
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
