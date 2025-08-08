import Image from "next/image";
import SolarsystemSvg from "../assets/Solarsystem.svg";
import logojpeg from "../assets/logo.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="mx-auto p-8 flex flex-col h-screen w-full max-w-screen-xl"
      >
        {" "}
        {/* fundo da página */}
        <nav className="w-full flex items-center justify-between">
          <Link
              href="/"
            > 
          
          {/*Header Navbar*/}
          <Image
            className="h-14 w-14 rounded-full"
            src={logojpeg}
            alt="Logomarca da PlutoAr"
          />
          {/*Logo*/}   
          </Link>
          <div className="flex gap-8 items-center">
            <Link
              href="#home"
              className="font-medium text-stone-700 hover:text-fuchsia-500 transition-colors"
            >
              Preço
            </Link>

            <Link
              href="#home"
              className="font-medium text-stone-700 hover:text-fuchsia-500 transition-colors"
            >
              Sobre
            </Link>

            <Link
              href="#home"
              className="font-medium text-stone-700 hover:text-fuchsia-500 transition-colors"
            >
              Blog
            </Link>

            <Link
              href="#home"
              className="bg-fuchsia-500 px-5 py-3 font-medium text-white transition-colors hover:bg-fuchsia-700 rounded-full"
            >
              Começar
            </Link>
          </div>
        </nav>
        <div className="items-center justify-between w-full flex mt-8">
          <div>
            <h1 className="text-left font-black text-stone-800 text-7xl">
              Explore o Universo com a
              <span className="text-fuchsia-500"> Pluto AR</span>
            </h1>
            <p className="text-lg text-stone-700 font-bold mt-8">Nunca foi tão fácil conhecer o universo.
              <br/>Conheça mais atráves da Realidade Aumentada</p>
          </div>
          <Image
            className="w-full max-w-2xl"
            src={SolarsystemSvg}
            alt="Ilustação do sistema solar tela inicial"
          />
        </div>

                    <Link
              href="#home"
              className="bg-fuchsia-500 px-5 py-3 font-medium text-white transition-colors hover:bg-fuchsia-700 rounded-full w-fit mx-auto"
            >
              Comece Agora
            </Link>
      </section>
    </main>
  );
}
