import iconSedans from "../src/assets/icon-sedans.svg"
import iconSuvs from "../src/assets/icon-suvs.svg"
import luxuosos from "../src/assets/icon-luxury.svg"

export default function App() {
  return(
    <main className="min-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange p-12 rounded-t-lg">
          <img src={iconSedans} alt="icone do primeiro carro" className="mb-7" />
          <h2 className="font-shoulders mb-7">Sedans</h2>
          <p className="font-lexend mb-7">Escolha um sedan pelo preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="#">Ver mais</a>
        </div>
        <div className="bg-green p-12">
          <img src={iconSuvs} alt="carro suv" className="mb-7"/>
          <h2 className="font-shoulders mb-7">Suvs</h2>
          <p className="font-lexend mb-7">Escolha um SUV pelo seu interior espaçoso, poder e versatibilidade. Prefeito para passar as férias em família ou aventuras off-road.</p>
          <a href="#">Ver mais</a>
        </div>
        <div className="bg-dark-green p-12 rounded-b-lg">
          <img src={luxuosos} alt="carros luxuosos" className="mb-7"/>
          <h2 className="font-shoulders mb-7">Luxuosos</h2>
          <p className="font-lexend mb-7">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="#">Ver mais</a>
        </div>
      </section>
    </main>
  )
}