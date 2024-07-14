const HeroSection = () => {
  return (
    <div className="h-[100vh] lg:h-[60vh] w-full  my-24 " id="home">
      <div className="flex  flex-col items-center justify-center  ">
        <h2 className="text-6xl mt-16 font-oswald">David Lovera</h2>
        <p className="mt-4 text-center text-3xl">Desarrollador de Sofware</p>
        {/*aca ira la imagen mia  */}
        <p className="w-[300px] mb-4 lg:mb-0 lg:w-[900px] text-xl lg:text-2xl text-center mt-10">
          Soy un programador de 27 años especializado en el desarrollo frontend.
          Utilizo Next.js como mi framework principal para crear aplicaciones
          web rápidas, eficientes y con una excelente experiencia de usuario. Mi
          pasión es convertir ideas en productos digitales que no solo se vean
          bien, sino que también funcionen a la perfección
        </p>
      </div>
    </div>
  )
}
export default HeroSection
