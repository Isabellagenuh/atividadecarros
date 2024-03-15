import iconSedans from "../src/assets/icon-sedans.svg"
import iconSuvs from "../src/assets/icon-suvs.svg"
import luxuosos from "../src/assets/icon-luxury.svg"

export default function App() {
  return(
    <main>
      <section>
        <div>
          <img src={iconSedans} alt="icone do primeiro carro" />
          <h2>Sedans</h2>
          <p>Escolha um sedan pelo preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="#">Ver mais</a>
        </div>
        <div>
          <img src={iconSuvs} alt="carro suv" />
          <h2>Suvs</h2>
          <p>Escolha um SUV pelo seu interior espaçoso, poder e versatibilidade. Prefeito para passar as férias em família ou aventuras off-road.</p>
          <a href="#">Ver mais</a>
        </div>
        <div>
          <img src={luxuosos} alt="carros luxuosos" />
          <h2>Luxuosos</h2>
          <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="#">Ver mais</a>
        </div>
      </section>
    </main>
  )
}