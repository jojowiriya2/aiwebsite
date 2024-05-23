const Signup = () => {
  return (
    <div className="flex gap-[1rem]">
      <div className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
        <h4 className="h4 mb-4">Signup for early access</h4>
        <p className="body-2 min-h-[4rem] mb-2 ">
          Be the first to experience Ongkanon by signing up for our early
          access. You'll be invited to try Ongkanon during the early access
          launch. As a thank you, early users will receive exclusive perks and
          benefits when the full product launches, including special features,
          premium content, and more.
        </p>
        <div className="flex items-center ">
          <div className="w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] even:py-14 odd:py-2 odd:my-4 ">
            <form>
              <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                      <label
                        for="first-name"
                        class="block text-sm font-medium leading-6 "
                      >
                        First name
                      </label>
                      <div class="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autocomplete="given-name"
                          class="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label
                        for="last-name"
                        class="block text-sm font-medium leading-6 "
                      >
                        Last name
                      </label>
                      <div class="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autocomplete="family-name"
                          class="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-4">
                      <label
                        for="email"
                        class="block text-sm font-medium leading-6 "
                      >
                        Email address
                      </label>
                      <div class="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          class="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-1 flex items-center justify-center gap-x-6">
                <button
                  type="submit"
                  class="rounded-md w-1/2 text-xl bg-indigo-600 px-3 mb-4 py-3 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <a className="text-xs font-code font-bold tracking-wider ">
            Signing up is quick and easy, so don't miss out on this opportunity
            to be part of something exciting from the start.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
