import React from "react";

const LoginPage = () => {
  return (
    <div className="text-center">
      <div class=" mx-auto px-4 md:px-0 lg:w-6/12">
        <div class="md:mx-6 md:p-12">
          <form>
            <h2 class="font-bold text-[30px] mb-4 ">
              Please login to your account
            </h2>

            <div class="text-start mb-4" data-te-input-wrapper-init>
              <label for="exampleFormControlInput1">Username</label>
              <input
                type="text"
                class=" block min-h-[auto] w-full rounded border-solid border-2 border-gray-800 bg-transparent px-3 py-[0.32rem]  mt-1 outline-none"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="text-start mb-4" data-te-input-wrapper-init>
              <label for="exampleFormControlInput1">Password</label>
              <input
                type="password"
                class=" block min-h-[auto] w-full rounded border-solid border-2 border-gray-800 bg-transparent px-3 py-[0.32rem] mt-1 outline-none"
                id="exampleFormControlInput11"
              />
            </div>

            <div class="mb-12 pb-1 pt-1 text-center">
              <button
                class="mb-3 mx-auto block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase hover:text-white hover:scale-105"
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Log in
              </button>

              <a href="#!" className="hover:text-white hover:scale-105 mx-auto">
                Forgot password?
              </a>
            </div>

            <div class="flex items-center justify-around pb-6">
              <p class="mb-0 mr-2">Don't have an account?</p>
              <button
                type="button"
                class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase hover:text-white hover:border-white"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
