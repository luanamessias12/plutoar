import Link from "next/link";

export default function PlataformaHome() {
  return (
    <div className="max-w-screen-lg mx-auto space-y-8">
      {/* Retângulo grande */}
      <Link
        href="/plataforma/sistema-solar"
        className="block bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition"
      >
        <h2 className="text-2xl font-bold text-purple-700">Sistema Solar em 3D</h2>
        <p className="text-gray-600 mt-2">Explore o sistema solar de forma interativa.</p>
      </Link>

      {/* Dois retângulos menores lado a lado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/plataforma/planetas"
          className="block bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold text-purple-700">Planetas</h3>
          <p className="text-gray-600 mt-2">Conheça os planetas do nosso sistema solar.</p>
        </Link>

        <Link
          href="/plataforma/gameplay"
          className="block bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold text-purple-700">Gameplay</h3>
          <p className="text-gray-600 mt-2">Veja como jogar e se divertir aprendendo.</p>
        </Link>
      </div>
    </div>
  );
}
