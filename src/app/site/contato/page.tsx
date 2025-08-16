import Link from "next/link";

export default function Contato() {
  return (
    <main className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-fuchsia-500 mb-6">
        Entre em Contato
      </h1>
      <p className="text-lg text-stone-700 mb-4">
        Ficaremos felizes em ouvir você! Preencha o formulário abaixo ou envie
        um e-mail para <strong>contato@plutoar.com</strong>.
      </p>
      <form className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Seu Nome"
          className="border border-stone-300 p-3 rounded"
        />
        <input
          type="email"
          placeholder="Seu E-mail"
          className="border border-stone-300 p-3 rounded"
        />
        <textarea
          placeholder="Sua Mensagem"
          rows={4}
          className="border border-stone-300 p-3 rounded"
        ></textarea>
        <button className="bg-fuchsia-500 text-white px-6 py-3 rounded-full hover:bg-fuchsia-700 transition-colors">
          Enviar
        </button>
      </form>

      <Link
        href="/"
        className="mt-6 inline-block text-fuchsia-500 hover:underline"
      >
        Voltar para Início
      </Link>
    </main>
  );
}
