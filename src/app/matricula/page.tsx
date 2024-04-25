"use client";
import { ChangeEvent, useState, FC, Suspense, useCallback } from "react";

import Head from "next/head";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Matricula: FC = () => {
  const myPlans = [
    {
      id: "mensal",
      title: "Plano Mensal",
      price: "R$200,00",
      description: "Ideal para quem está começando.",
    },
    {
      id: "dupla",
      title: "Plano em Dupla",
      price: "R$380,00",
      description: "Perfeito para casais ou amigos.",
    },
    {
      id: "trimestral",
      title: "Plano Trimestral",
      price: "R$540,00",
      description: "O melhor custo-benefício.",
    },
  ];
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const plano = searchParams.get("plano");
  const planSelected = plano;
  const initialPlan = planSelected
    ? myPlans.find((plan) => plan.id === planSelected)?.id
    : myPlans[0].id;

  const [selectedPlan, setSelectedPlan] = useState(initialPlan);

  const handlePlanChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPlan(event.target.value);
    router.push(
      pathname + "?" + createQueryString("plano", event.target.value)
    );
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Head>
        <title>Matrícula | Acima do Solado</title>
      </Head>
      <main className="flex-grow">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold mb-4">
            Parabéns por dar o primeiro passo rumo ao seu sucesso no forró!
          </h1>
          <p className="mb-6">
            Ficamos felizes em saber que você está interessado em se juntar à
            nossa comunidade de dança no Acima do Solado.
          </p>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Escolha seu plano</h2>
          <p>Selecione um dos planos abaixo para continuar sua matrícula:</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {myPlans.map((plan) => (
              <label
                key={plan.id}
                className="block p-4 bg-white shadow-md rounded-lg cursor-pointer"
              >
                <input
                  type="radio"
                  name="plano"
                  value={plan.id}
                  onChange={handlePlanChange}
                  className="mr-2"
                  checked={selectedPlan === plan.id}
                />
                <span className="font-bold text-gray-900">
                  {plan.title} - {plan.price}
                </span>
                <p className="text-sm mt-2 text-gray-700">{plan.description}</p>
              </label>
            ))}
          </div>
          <Link
            href={`https://wa.me/5583998050733?text=Olá, estou interessado(a) no plano ${selectedPlan} da sala VIP e gostaria de mais informações sobre a matrícula.`}
            target="_blank"
            className={`mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300`}
          >
            Matricule-se pelo WhatsApp
          </Link>
        </div>
      </main>
      <footer className="text-center p-4">
        Em caso de dúvidas, entre em contato conosco: <br />
        Telefone:{" "}
        <Link
          href={`https://wa.me/5583998050733?text=Olá, estou com dúvidas sobre a sala VIP e gostaria de mais informações para fazer a matrícula.`}
          className="text-blue-500"
        >
          83 99805-0733
        </Link>{" "}
        | E-mail:
        <Link
          href="mailto:contato@acimadosolado.com.br"
          target="_blank"
          className="text-blue-500"
        >
          contato@acimadosolado.com.br
        </Link>
      </footer>
    </div>
  );
};

export default function MatriculaPage() {
  return (
    <Suspense>
      <Matricula />
    </Suspense>
  );
}
