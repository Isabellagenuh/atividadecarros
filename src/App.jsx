import Sedans from "./components/Sedans"
import Suvs from "./components/Suvs"
import Luxury from "./components/Luxury"

export default function App() {
  return(
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
      <div className="lg:flex ">
        <Sedans />
        <Suvs />
        <Luxury />
      </div>
    </main>
  )
}