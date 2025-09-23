function EventHeader() {
  return (
    <div className="text-center mb-8">
      <div className="mb-6">
        <img
          src="../img/logo.png"
          alt="Event Logo"
          className="size-28 mx-auto rounded-full border-2 border-yellow-400/30 shadow-lg p-2"
        />
      </div>
      <div className="text-yellow-400 text-sm font-light tracking-widest mb-2">
        CELEBRATING
      </div>
      <h1 className="text-5xl font-bold text-white mb-2">
        <span className="text-yellow-400">50</span> Years
      </h1>
      <div className="text-yellow-400 text-sm font-light tracking-widest">
        OF LEYECO II EXCELLENCE
      </div>
      <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-4"></div>
    </div>
  );
}

export default EventHeader;