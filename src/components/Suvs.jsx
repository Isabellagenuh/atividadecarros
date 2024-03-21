import iconSuvs from "../assets/icon-suvs.svg"

export default function Suvs() {
  return (
    <div>
        <section className="bg-green p-12">
          <img src={iconSuvs} alt="carro suv" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
          <p className="font-lexend mb-7 text-offwhitebg lg:mb-20">Escolha um SUV pelo seu0 interior espaçoso, poder e versatibilidade. Prefeito para passar as férias em família ou aventuras off-road.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/carros-novos/estoque?lkid=1001">Ver mais</a>
        </section>
    </div>
  )
}
