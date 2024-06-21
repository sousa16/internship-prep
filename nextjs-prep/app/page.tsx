export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/login"
          rel="noopener noreferrer">
          <p className="text-lg fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">Login</code>
          </p>
        </a>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/form"
          rel="noopener noreferrer">
          <p className="text-lg fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">Form</code>
          </p>
        </a>
      </div>

      <div className="flex flex-grow flex-col items-center justify-center mt-[-10%]">
        <h1 className="text-4xl font-bold text-center">
          Welcome to my first NextJS project!
        </h1>

        <p className="text-lg text-center mt-[3%]">
          This web app has a login page and a form page.
        </p>
        <p className="text-lg text-center">
          Its purpose is to help me learn Jenkins and Playwright, as well as to
          practice my NextJS and TypeScript skills.
        </p>
        <p className="text-lg text-center">
          Feel free to explore! There's not a lot to see, but enjoy looking
          around.
        </p>
      </div>
    </main>
  );
}
