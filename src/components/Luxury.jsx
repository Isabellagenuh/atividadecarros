import luxuosos from "../assets/icon-luxury.svg"

export default function Luxury() {
  return (
    <div>
        <div className="bg-dark-green p-12 max:lg-rounded-t-lg lg:rounded-l-lg">
          <img src={luxuosos} alt="carros luxuosos" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhitebg lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg " href="https://www.webmotors.com.br/carros-novos/estoque?lkid=1001">Ver mais</a>
        </div>
    </div>
  )
}
