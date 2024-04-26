"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const AboutClasses: React.FC = () => {
  const router = useRouter();
  return (
    <section className="py-20 lg:px-10 px-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Por que escolher nossas aulas VIP?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        <div className="text-center my-10">
          <Link href="/matricula">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition duration-200">
              Inscreva-se agora e comece a dançar!
            </button>
          </Link>
          <p className="mt-4 text-red-600">
            Vagas limitadas para garantir a qualidade do ensino!
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">
          Benefícios das nossas aulas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        <div className="text-center my-10">
          <Link href="/matricula">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition duration-200">
              Garanta sua vaga antes que acabe!
            </button>
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-center mb-4">
          Escolha seu Pacote VIP
        </h2>
        <p className="text-center mb-12 max-w-screen-lg mx-auto">
          Participe de nossas exclusivas aulas de forró, disponíveis às{" "}
          <strong>terças e quintas</strong>. Oferecemos{" "}
          <strong>três turmas</strong> com início às{" "}
          <strong>19h, 20h, e 21h</strong>, cada aula com{" "}
          <strong>uma hora de duração</strong>. Escolha o pacote que melhor se
          adapta a você e garanta sua vaga para começar a dançar!
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Pacote Individual */}
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="p-5 flex flex-col h-full">
              <h5 className="text-lg font-bold tracking-tight text-gray-900 mb-2">
                Pacote Individual
              </h5>
              <p className="font-normal text-gray-700 mb-4">
                Ideal para quem busca flexibilidade e a experiência completa das
                aulas em grupo, com atenção dedicada de nossos instrutores.
              </p>
              <ul className="text-sm text-gray-600 mb-8 ">
                <li>Participação em qualquer turma</li>
                <li>
                  Investimento: <strong>R$ 200,00/mês</strong>
                </li>
              </ul>

              <button
                onClick={() => router.push(`/matricula?plano=mensal`)}
                className="inline-flex items-center justify-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              >
                Escolher Pacote
              </button>
            </div>
          </div>

          {/* Pacote Dupla */}
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="p-5 flex flex-col h-full">
              <h5 className="text-lg font-bold tracking-tight text-gray-900 mb-2">
                Pacote Dupla
              </h5>
              <p className="font-normal text-gray-700 mb-4">
                A opção perfeita para casais ou amigos que desejam aprender
                juntos. Aproveite um desconto especial escolhendo este pacote.
              </p>
              <ul className="text-sm text-gray-600 mb-8 h-full">
                <li>Acesso às turmas com um amigo</li>
                <li>
                  Investimento: <strong>R$ 380,00/mês</strong> (R$ 190 por
                  pessoa)
                </li>
              </ul>

              <button
                onClick={() => router.push(`/matricula?plano=dupla`)}
                className="inline-flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 mt-auto "
              >
                Escolher Pacote
              </button>
            </div>
          </div>

          {/* Pacote Trimestral */}
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="p-5 flex flex-col h-full">
              <h5 className="text-lg font-bold tracking-tight text-gray-900 mb-2">
                Pacote Trimestral
              </h5>
              <p className="font-normal text-gray-700 mb-4">
                Para os verdadeiramente comprometidos em aprimorar sua dança.
                Desfrute de um desconto ainda maior ao se inscrever no pacote
                trimestral.
              </p>
              <ul className="text-sm text-gray-600 mb-8 h-full">
                <li>Flexibilidade total de turmas</li>
                <li>
                  Investimento: <strong>R$ 540,00/trimestre</strong>
                </li>
              </ul>

              <button
                onClick={() => router.push(`/matricula?plano=trimestral`)}
                className="inline-flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              >
                Escolher Pacote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
