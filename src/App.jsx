import React from "react";

const handleForm = (e) => {
  e.preventDefault();
  console.log(e.target.email.value);
  console.log(e.target.password.value);

  if (e.target.email.value === "" || e.target.password.value === "") {
    alert("Please fill in all the fields");
    return;
  }

  alert("Form submitted successfully");

  //clear the values
  e.target.email.value = "";
  e.target.password.value = "";
};

const App = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-4 py-10 lg:px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong ">
          Welcome Back
        </h3>
        <p className="text-center text-tremor-default text-tremor-content ">
          Enter your credentials to access your account.
        </p>
        <form onSubmit={handleForm} className="mt-8 space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-tremor-default font-medium text-tremor-content-strong "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              placeholder="john@company.com"
              className="w-full px-3 py-2 rounded-tremor-default border border-tremor-border "
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-tremor-default font-medium text-tremor-content-strong"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              className="w-full px-3 py-2 rounded-tremor-default border border-tremor-border "
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white cursor-pointer w-full rounded-tremor-default bg-tremor-brand py-2.5 text-center text-sm font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis "
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-center text-tremor-default text-tremor-content ">
          Forgot your password?{" "}
          <a
            href="#"
            className="font-medium text-tremor-brand hover:text-tremor-brand-emphasis "
          >
            Reset password
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
