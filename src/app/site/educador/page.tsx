import Link from "next/link";

export default function Educador() {
  return (
    <main className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-fuchsia-500 mb-6">
        Seja um Educador Parceiro
      </h1>
      <p className="text-lg text-stone-700 mb-4">
        Na Pluto AR, oferecemos ferramentas e conteúdos interativos para
        transformar suas aulas em experiências imersivas.
      </p>
      <ul className="list-disc list-inside text-stone-700">
        <li>Conteúdos de astronomia em realidade aumentada</li>
        <li>Material para todos os níveis de ensino</li>
        <li>Plataforma simples e acessível</li>
      </ul>

      <Link
        href="/"
        className="mt-6 inline-block bg-fuchsia-500 text-white px-6 py-3 rounded-full hover:bg-fuchsia-700 transition-colors"
      >
        Voltar para Início
      </Link>
    </main>
  );
}
