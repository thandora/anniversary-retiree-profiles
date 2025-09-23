function AnniversaryInvitation() {
  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="relative bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-yellow-400/40 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-yellow-400/20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-400/20 rounded-full"></div>
          <div className="absolute top-1/2 left-6 w-1 h-12 bg-gradient-to-b from-yellow-400/30 to-transparent rounded-full"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="text-yellow-400 text-sm font-bold tracking-widest mb-3">
            YOU&apos;RE INVITED
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
            Join Us for Our
            <br />
            <span className="text-yellow-400">50th Anniversary</span>
            <br />
            Celebration
          </h3>

          <div className="space-y-4 mb-6 pl-14">
            <div className="flex">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-400 text-lg">📅</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">October 25, 2025</div>
                  <div className="text-gray-300 text-sm">Saturday</div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-400 text-lg">📍</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Humans Center</div>
                  <div className="text-gray-300 text-sm">Venue</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-4"></div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Come celebrate five decades of excellence, dedication, and
            community impact as we honor our journey together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnniversaryInvitation;