export const Contact: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Contato</h2>
        <div className="mt-8">
          <p>Endereço: Rua Izidro Gomes 361, Tambaú sala 03</p>
          <p>Telefone: 83 99805-0733</p>
          <p>E-mail: contato@acimadosolado.com.br</p>
          {/* Link para Instagram */}
          <a
            href="https://www.instagram.com/acimadosolado/"
            className="text-blue-500"
          >
            Siga-nos no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
