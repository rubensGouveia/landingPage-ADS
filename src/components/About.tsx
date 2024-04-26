export const AboutStudio: React.FC = () => {
  return (
    <section className="py-20 lg:px-10  px-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Sobre o Estúdio Acima do Solado
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <img
              src={"/foto.webp"}
              alt="foto do Acima do Solado"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="mt-4 lg:mt-0">
              O Acima do Solado, localizado no coração de Tambauzinho e agora
              também com uma nova unidade VIP em Tambaú, é um estúdio de dança e
              teatro que vai além do convencional. Aqui, a paixão pela arte se
              funde com a alegria de viver, criando um ambiente acolhedor e
              estimulante para o aprendizado.
            </p>
            <p className="mt-4">
              Nossa equipe de profissionais altamente capacitados e apaixonados
              oferece aulas dinâmicas e envolventes, que permitem aos alunos
              desenvolver suas habilidades artísticas e descobrir o verdadeiro
              valor da arte em suas vidas. Acreditamos no poder da dança e do
              teatro para unir pessoas, criar laços duradouros e proporcionar
              momentos de descontração e festa.
            </p>
            <p className="mt-4">
              Ao se juntar a nós, você embarcará em uma jornada de
              autodescoberta e crescimento pessoal, desenvolvendo confiança,
              criatividade e uma paixão duradoura pelas artes. Venha conhecer o
              Acima do Solado e faça parte de uma comunidade vibrante que
              valoriza a arte, a amizade e a alegria de viver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
