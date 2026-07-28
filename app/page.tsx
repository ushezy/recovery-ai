import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <div className="mb-6 text-5xl">✨</div>

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          Recovery AI
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          Your AI Performance Coach
        </p>

        <p className="mt-10 text-xl text-gray-400 leading-8">
          Know your state.
          <br />
          Own your day.
        </p>

        <p className="mt-8 text-gray-500 max-w-xl mx-auto leading-7">
          Recovery AI helps you optimize your energy, focus and recovery with
          personalized AI guidance every day.
        </p>

        <Link
          href="/check-in"
          className="mt-12 inline-block rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-gray-200"
        >
          Start Your Day →
        </Link>

      </div>
    </main>
  );
}
