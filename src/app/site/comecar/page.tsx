    import Link from "next/link";

export default function Comecar() {
  return (
    <main className="p-8 max-w-screen-lg mx-auto text-center">
      <h1 className="text-4xl font-bold text-fuchsia-500 mb-6">
        Vamos Começar!
      </h1>
      <p className="text-lg text-stone-700 mb-4">
        Explore o universo em realidade aumentada agora
        mesmo.
      </p>
      <Link
        href="/plataforma"
        className="bg-fuchsia-500 text-white px-6 py-3 rounded-full hover:bg-fuchsia-700 transition-colors"
      >
        Vamos Começar
      </Link>
    </main>
  );
}
