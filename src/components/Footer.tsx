// Footer.tsx
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Estúdio Acima do Solado</h3>
            <p className="text-gray-400">
              Rua Izidro Gomes 361, Tambaú sala 03
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul>
              <li>
                <a
                  href="https://wa.me/5583998050733"
                  className="text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  Telefone: 83 99805-0733
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@acimadosolado.com.br"
                  className="text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  E-mail: contato@acimadosolado.com.br
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <a
              href="https://www.instagram.com/acimadosolado/"
              className="text-blue-400 hover:text-blue-300 transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-10">
          © {new Date().getFullYear()} Estúdio Acima do Solado. Todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
};
