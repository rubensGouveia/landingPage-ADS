import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-20 bg-blue-500 text-white">
      <div className="z-10 w-full mb-4 items-center justify-center font-mono text-sm flex ">
        <img
          src={"/acimavip.png"}
          alt="Logo do acima do Solado"
          width={160}
          height={160}
        />
      </div>

      <h1 className="text-4xl font-bold px-6">
        Aprenda a dançar forró antes do São João
      </h1>
      <p className="mt-4 px-6">
        Você quer arrasar na pista durante as festas juninas? Nossas aulas de
        forró VIP são perfeitas para você!
      </p>
      <Link href="/matricula">
        <button className="mt-8 px-6 py-2 bg-red-600 rounded-full font-bold hover:bg-red-700 transition duration-200">
          Quero me matricular agora!
        </button>
      </Link>
    </section>
  );
};
