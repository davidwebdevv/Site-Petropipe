export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-gray-400">
              Petropipe foi criada com objetivo de ser a melhor empresa de “Project Management” do mercado brasileiro, fornecendo materiais de fabricantes de qualidade comprovada e
              reconhecida sem perder o foco nos custos competitivos
            </p>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/produtos/Tubos&Tubing" className="text-gray-400 hover:text-white">
                  Tubos & Tubing
                </a>
              </li>
              <li>
                <a href="/produtos/Conexoes" className="text-gray-400 hover:text-white">
                  Conexões
                </a>
              </li>
              <li>
                <a href="/produtos/Flanges" className="text-gray-400 hover:text-white">
                  Flanges
                </a>
              </li>
               <li>
                <a href="/produtos/Forjados" className="text-gray-400 hover:text-white">
                  Forjados
                </a>
              </li>
               <li>
                <a href="/produtos/Multitubos" className="text-gray-400 hover:text-white">
                  Multitubos
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
                <a href="tel:+551145264528" className="hover:text-white">
                  (11) 4526-4528
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto: vendas@petropipe.com.br" className="hover:text-white">
                  vendas@petropipe.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Endereço</h3>
            <p className="text-gray-400">
              Av. Antonio Barchetta, 59
              <br />
              Jaridm Copacabana, Jundiaí - SP
              <br />
              CEP: 13210-400
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Petropipe. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}