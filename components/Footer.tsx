export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-gray-400">
              Especialistas em tubos e conexões de aço inox, fornecendo soluções de qualidade para a indústria.
            </p>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/produtos/Tubos&Tubing" className="text-gray-400 hover:text-white">
                  Tubos de Aço Inox
                </a>
              </li>
              <li>
                <a href="/produtos/Conexoes" className="text-gray-400 hover:text-white">
                  Conexões
                </a>
              </li>
              <li>
                <a href="/produtos/Flanges" className="text-gray-400 hover:text-white">
                  Válvulas
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Telefone:</span>
                <a href="tel:+551199999999" className="hover:text-white">
                  (11) 9999-9999
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:contato@acotubo.com.br" className="hover:text-white">
                  contato@acotubo.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Endereço</h3>
            <p className="text-gray-400">
              Rua Exemplo, 123
              <br />
              São Paulo - SP
              <br />
              CEP: 00000-000
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AcoTubo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}