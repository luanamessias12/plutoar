import Image from "next/image";
import SolarsystemSvg from "../assets/Solarsystem.svg";
import logojpeg from "../assets/logo.jpeg";

export default function Home() {
  return (
    <main>
        <section className="mx-auto flex flex-col h-screen w-full max-w-screen-lg"> {/* fundo da página */}
          <nav className="w-full flex items-center justify-between"> {/*Header Navbar*/}
            <Image className="h-10 w-10 rounded-full" src={logojpeg} alt="Logomarca da PlutoAr" />  {/*Logo*/}
          </nav>

        <div className="items-center justify-between w-full flex">
        <div>
            <h1 className="text-left font-black text-7xl">Explore o Universo com a <span className="text-purple-950">Pluto AR</span>
            </h1>
          </div>
          <Image
          className="w-full max-w-2xl"
          src={SolarsystemSvg}
          alt="Ilustação do sistema solar tela inicial"/>
        </div>

        </section>
    </main>
  );
}
