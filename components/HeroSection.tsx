


  const HeroSection: React.FC = () => {
    return (
      <section
        id="home"
        className="relative h-screen bg-[url('/herobg.jpg')] bg-cover bg-center flex items-center justify-center"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
  
        {/* Centered Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-4xl font-extrabold leading-tight">
          Your One-Stop Destination for Booking Hassle-Free Darshan at Baidyanath Dham
          </h1>
          <div className="mt-8">
            <button className="px-10 py-4 bg-orange-400 hover:bg-blue-600 text-white font-medium text-xl rounded-lg shadow-lg transition">
              Book Now
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  

  