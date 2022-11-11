import Head from "next/head";
import Image from "next/image";
import Profile from "../components/Profile";
import { Profile2 } from "../components/Profile2";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen w-full justify-start items-start p-8'>
      <Head>
        <title>Nemiwind</title>
        <meta name="description" content="Generated by Nemiwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"flex flex-col space-y-16 w-full"}>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex flex-col justify-end md:items-end">
            <a href="https://nextjs.org" className='text-4xl font-extrabold lowercase tracking-tighter italic'>Nemiwind</a>
            <h1 className={"font-light text-sm"}>
              A Nextjs, Wagmi, Tailwind starter site for instant experimentation
            </h1>
          </div>
        </div>

        <div className={"grid h-full space-y-4 md:space-y-8 lg:space-y-12 cursor-default items-between"}>
          <a
            href="https://nextjs.org/docs/getting-started"
            className={"flex flex-col cursor-default"}
          >
            <h2 className='dependency-section'>HTML/React Framework: Next &rarr;</h2>
            {/* insert Next bio */}
            <p className="dependency-description">
              Next.js is a flexible React framework that gives you building blocks to create fast web applications.
            </p>
          </a>

          <a href="https://tailwindcss.com/docs/guides/nextjs" className={"flex flex-col cursor-default"}>
            <h2 className='dependency-section'>CSS Framework: Tailwind &rarr;</h2>
            {/* insert tailwind bio */}
            <p className="dependency-description">
              A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
            </p>
          </a>

          <a href="https://wagmi.sh/docs/getting-started" className={"flex flex-col cursor-default"}>
            <h2 className='dependency-section'>Ethereum Access: WAGMI &rarr;</h2>
            {/* insert wagmi bio */}
            <p className="dependency-description">
              wagmi is a collection of React Hooks containing everything you need to start working with Ethereum. wagmi makes it easy to &apos;<span className="underline">Connect Wallet</span>,&apos; display <span className="text-blue-600 font-medium tracking-tight">ENS</span> and balance information, sign messages, interact with contracts, and much more — all with caching, request deduplication, and persistence.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
