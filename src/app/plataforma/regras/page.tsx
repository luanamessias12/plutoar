export default function RegrasPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Regras do Game</h1>
      <p className="mb-6 text-gray-700">
        Antes de começar, leia atentamente as regras para garantir uma experiência divertida e justa para todos.
      </p>

      <ol className="list-decimal pl-6 space-y-2">
        <li>Respeite os outros jogadores.</li>
        <li>Não utilize trapaças ou hacks.</li>
        <li>Complete as missões dentro do tempo proposto.</li>
        <li>Respeite o ambiente virtual e real ao jogar.</li>
      </ol>
    </div>
  );
}
