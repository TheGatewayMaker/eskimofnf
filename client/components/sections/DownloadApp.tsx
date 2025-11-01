import { Apple, Play } from "lucide-react";

export const DownloadApp = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="scroll-fade-in text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Download Our Official App
            </h2>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Get instant access to all Eskimo features on your phone. Manage
              your eSIM, track your data, and enjoy seamless global
              connectivity with our intuitive mobile app.
            </p>

            <div className="space-y-4">
              {/* Apple App Store Button */}
              <a
                href="https://apps.apple.com/us/app/eskimo-esim-travel-internet/id1590276868"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-white text-blue-600 hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>

              {/* Google Play Store Button */}
              <a
                href="https://play.google.com/store/apps/details?id=travel.eskimo.esim&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-white text-blue-600 hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>

            <p className="text-sm text-blue-200 mt-8">
              Available for iOS and Android. Download now and get 500MB free
              data on signup.
            </p>
          </div>

          {/* Right side - Visual */}
          <div className="scroll-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="relative">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-3xl blur-2xl opacity-30" />

              {/* Phone mockup container */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-3xl p-8">
                <div className="bg-gradient-to-b from-blue-100 to-cyan-100 rounded-2xl p-4">
                  {/* Phone frame */}
                  <div className="bg-black rounded-3xl p-3 shadow-2xl">
                    {/* Phone notch */}
                    <div className="bg-black rounded-2xl px-8 py-2 text-center text-white text-xs font-semibold mb-4">
                      9:41
                    </div>

                    {/* Phone screen content */}
                    <div className="bg-gradient-to-b from-blue-500 to-cyan-500 rounded-2xl h-80 flex flex-col items-center justify-center text-white p-6">
                      <div className="text-center">
                        <div className="text-6xl font-bold mb-4">📱</div>
                        <h3 className="text-xl font-bold mb-2">Eskimo</h3>
                        <p className="text-sm opacity-90">Global Connectivity</p>
                      </div>
                    </div>

                    {/* Phone home bar */}
                    <div className="bg-black rounded-2xl mt-3 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Instant Setup",
              description: "Activate your eSIM in seconds without ID verification.",
              icon: "⚡",
            },
            {
              title: "Real-time Monitoring",
              description: "Track your data usage and validity in real-time.",
              icon: "📊",
            },
            {
              title: "Global Support",
              description:
                "Access 24/7 support and manage multiple eSIMs on one app.",
              icon: "🌍",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="scroll-fade-in text-white text-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
