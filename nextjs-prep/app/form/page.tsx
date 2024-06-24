"use client";

import { useState } from "react";

export default function FormPage() {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number | "">("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateEmail(email) && validateAge(age)) {
      alert("Form submitted successfully!");
      localStorage.setItem("formData", JSON.stringify({ email, age }));
    } else {
      alert("Invalid form data");
    }
  };

  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateAge = (age: number | ""): boolean => {
    return typeof age === "number" && age > 0 && age < 120;
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/"
          rel="noopener noreferrer">
          <p className="text-lg fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">Home</code>
          </p>
        </a>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/"
          rel="noopener noreferrer">
          <p className="text-lg fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">Login</code>
          </p>
        </a>
      </div>

      <div className="flex flex-grow flex-col items-center justify-center mt-[-10%]">
        <h1 className="text-4xl font-bold text-center">Form</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 mt-[10%]">
          <div className="flex items-center">
            <label htmlFor="email" className="mr-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="age" className="mr-4">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              required
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            className="mt-[3%] w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
