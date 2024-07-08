const HeroSection = () => {
  return (
    <div className="h-[40vh] w-full my-24 " id="home">
      <div className="flex flex-col items-center justify-center w-full ">
        <h2 className="text-5xl mt-16 font-oswald">David Lovera</h2>
        <p className="mt-4 text-4xl">Desarrollador de Sofware</p>
        {/*aca ira la imagen mia  */}
        <p className="w-[450px] mb-4 lg:mb-0 lg:w-[900px] text-2xl text-center mt-10">
          Soy un programador de 27 años me especializo en el frontend utilizando
          Nextjs como framework{" "}
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
