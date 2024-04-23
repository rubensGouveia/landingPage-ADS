export const AboutClasses: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Por que escolher nossas aulas VIP?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-12">
          {/* Exemplo de um benefício */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Turmas pequenas</h3>
            <p>
              No máximo 3 casais por turma, garantindo um acompanhamento
              personalizado.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Ambiente ideal</h3>
            <p>
              Sala acolhedora e bem equipada, com profissionais capacitados e
              segurança.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Localização privilegiada</h3>
            <p>
              Fácil acesso no bairro de Tambaú, próximo a pontos de referência
              da região.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center">
          Por que escolher nossas aulas VIP?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Metodologia eficaz</h3>
            <p>
              Aprendizado divertido e prático, com foco em exercícios e técnicas
              que aceleram seu desenvolvimento.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Progresso rápido</h3>
            <p>
              Resultados visíveis em apenas 1 mês, graças à nossa abordagem
              personalizada e às turmas reduzidas.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Vantagens exclusivas</h3>
            <p>
              Desconto especial em todos os eventos do estúdio (bailes, cursos,
              oficinas, etc.) para alunos da sala VIP.
            </p>
          </div>
        </div>

        {/* Horários disponíveis */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">
            Horários disponíveis
          </h3>
          <div className="flex flex-col items-center">
            <p>Turma 1: 19h - 20h (Terças e Quintas)</p>
            <p>Turma 2: 20h - 21h (Terças e Quintas)</p>
            <p>Turma 3: 21h - 22h (Terças e Quintas)</p>
          </div>
        </div>

        {/* Investimento */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-6">Investimento</h3>
          <div className="flex flex-col items-center">
            <p>Mensal: R$ 200,00</p>
            <p>Em dupla: R$ 380,00 (R$ 190 por pessoa)</p>
            <p>Trimestral: R$ 540,00</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition duration-200">
            Quero me matricular agora!
          </button>
        </div>
      </div>
    </section>
  );
};
