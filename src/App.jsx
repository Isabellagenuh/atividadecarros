import iconSedans from "../src/assets/icon-sedans.svg"
import iconSuvs from "../src/assets/icon-suvs.svg"
import luxuosos from "../src/assets/icon-luxury.svg"

export default function App() {
  return(
    <main className="border-2 border-orange">
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="icone do primeiro carro" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-lexend">Escolha um sedan pelo preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="#">Ver mais</a>
        </div>
        <div className="bg-green">
          <img src={iconSuvs} alt="carro suv" />
          <h2 className="font-shoulders">Suvs</h2>
          <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatibilidade. Prefeito para passar as férias em família ou aventuras off-road.</p>
          <a href="#">Ver mais</a>
        </div>
        <div className="bg-dark-green">
          <img src={luxuosos} alt="carros luxuosos" />
          <h2 className="font-shoulders">Luxuosos</h2>
          <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="#">Ver mais</a>
        </div>
      </section>
    </main>
  )
}