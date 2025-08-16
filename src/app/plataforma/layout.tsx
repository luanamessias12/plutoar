import Link from "next/link";

export default function PlataformaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Roxa */}
      <aside className="bg-purple-700 text-white w-64 flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8">Pluto AR</h1>
        <nav className="flex flex-col gap-4">
          <Link href="/plataforma" className="hover:bg-purple-600 p-2 rounded">
            Home
          </Link>
          <Link href="/plataforma/material" className="hover:bg-purple-600 p-2 rounded">
            Material
          </Link>
          <Link href="/plataforma/regras" className="hover:bg-purple-600 p-2 rounded">
            Regras do Game
          </Link>
        </nav>
        <div className="mt-auto">
          <Link
            href="/"
            className="block bg-white text-purple-700 text-center px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Sair
          </Link>
        </div>
      </aside>

      {/* Conteúdo da página */}
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}

