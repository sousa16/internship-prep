This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

For this project, I am using Jenkins to automatically run tests at every commit to the master branch. 
In order to achieve this, I had to create a webhook in my repository.
For that purpose, I have used ngronk locally to make my Jenkins page public. It also needs the project to be running locally.
The repository webhook is configured using a specific address, which needs to be changed at each ngronk run.
However, as this is only a learning project, I will not make the adjustment for Jenkins to be available on a persistent server.

FINAL COMMIT: Jenkins automatically ran the Playwright tests when I made my last commit.
So, this project is finished, as everything is working as intended.

## Running

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Playwright

````bash
npx playwright test
# for UI mode
npx playwright test --ui
# to open last HTMl report run
npx playwright show-report
```