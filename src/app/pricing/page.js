import Section from '../../components/Section';
import Image from 'next/image';

export const metadata = {
  title: "Affordable Pricing at Skyville Udaipur - Game Zone, Trampoline Park & More",
  description:
    "Check out our pricing for trampoline park access, arcade games, bowling, and event bookings. Skyville Udaipur offers affordable fun for everyone!",
  keywords:
    "Skyville pricing, Game zone rates, Udaipur trampoline park price, arcade cost, birthday party packages",
  openGraph: {
    type: "website",
    url: "https://skyvilleudaipur.com/pricing",
    title: "Skyville Udaipur Pricing - Trampoline & Arcade Rates",
    description:
      "Explore our pricing for games, birthday packages, school picnics, and more at Skyville Udaipur.",
    images: [
      {
        url: "/assets/Skybounce.png",
        width: 1200,
        height: 630,
        alt: "Skyville Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyville Udaipur Pricing",
    description:
      "Find the best value for fun at Skyville with our transparent and budget-friendly pricing.",
    images: [
      "/assets/Skybounce.png",
    ],
  },
};

const PricingTable = ({ title, titleColor, badgeBg, badgeColor, rows }) => (
  <div className="mb-10">
    <div className={`inline-block px-8 py-3 rounded-2xl font-bold text-2xl md:text-3xl mb-0 relative z-10 ${badgeBg} ${badgeColor}`} style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
      {title}
    </div>
    <div className="bg-white/95 rounded-2xl rounded-tl-none overflow-hidden shadow-2xl border-2 border-white/50 -mt-2 backdrop-blur-sm">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
            <th className="py-4 px-4 md:px-6 text-left font-bold text-gray-700 text-sm md:text-lg uppercase tracking-wide">Duration</th>
            <th className="py-4 px-4 md:px-6 text-center font-bold text-sm md:text-lg uppercase tracking-wide" style={{ color: titleColor }}>All Days</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-200 transition-colors hover:bg-blue-50/50`}>
              <td className="py-4 px-4 md:px-6 font-semibold text-gray-700 text-base md:text-xl">{row.duration}</td>
              <td className="py-4 px-4 md:px-6 text-center font-bold text-lg md:text-2xl" style={{ color: titleColor }}>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SingleRowTable = ({ title, titleColor, badgeBg, badgeColor, duration, price }) => (
  <div className="mb-10">
    <div className={`inline-block px-8 py-3 rounded-2xl font-bold text-2xl md:text-3xl mb-0 relative z-10 ${badgeBg} ${badgeColor}`} style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
      {title}
    </div>
    <div className="bg-white/95 rounded-2xl rounded-tl-none overflow-hidden shadow-2xl border-2 border-white/50 -mt-2 backdrop-blur-sm">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
            <th className="py-4 px-4 md:px-6 text-left font-bold text-gray-700 text-sm md:text-lg uppercase tracking-wide">Duration</th>
            <th className="py-4 px-4 md:px-6 text-center font-bold text-sm md:text-lg uppercase tracking-wide" style={{ color: titleColor }}>All Days</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-t border-gray-200 transition-colors hover:bg-blue-50/50">
            <td className="py-4 px-4 md:px-6 font-semibold text-gray-700 text-base md:text-xl">{duration}</td>
            <td className="py-4 px-4 md:px-6 text-center font-bold text-lg md:text-2xl" style={{ color: titleColor }}>{price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const EventIcon = ({ type }) => {
  switch (type) {
    case 'birthday':
      return (
        <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
        </svg>
      );
    case 'school':
      return (
        <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
        </svg>
      );
    case 'corporate':
      return (
        <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
        </svg>
      );
    case 'kitty':
      return (
        <svg className="w-12 h-12 md:w-14 md:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21v-2h18v2H2zm2-4v-7h1v-3h3V7h2v3h1v3h1v3H4zm12-7v3h1v3h-5v-3h1V10h-1V7h-1V5h5v2h-1v3h1zm-6 0V7h-1V5h-3v2h1v3h1v3h1v-3h1z"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="w-full py-8 md:py-16 relative overflow-hidden" style={{
        background: 'linear-gradient(180deg, #0a1628 0%, #0f2847 30%, #134074 60%, #1a5490 100%)'
      }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-cyan-400 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-indigo-400 blur-3xl"></div>
        </div>

        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-2" style={{
              color: 'white',
              textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(79,209,197,0.3)'
            }}>
              YOUR <span className="text-yellow-400" style={{ textShadow: '0 4px 20px rgba(250,204,21,0.5)' }}>SKYVILLE</span> ADVENTURE MENU
            </h1>
            <div className="h-1.5 w-32 md:w-48 mx-auto mt-6 rounded-full" style={{
              background: 'linear-gradient(90deg, #f97316, #eab308, #22c55e, #3b82f6, #a855f7)'
            }}></div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-4xl">
              <PricingTable
                title="TRAMPOLINE (Above 6 Yrs)"
                titleColor="#16a34a"
                badgeBg="bg-gradient-to-r from-green-500 to-emerald-600"
                badgeColor="text-white"
                rows={[
                  { duration: '1 hour', price: '600 INR' },
                  { duration: '30 minutes', price: '350 INR' },
                ]}
              />

              <PricingTable
                title="SOFT PLAY (Below 6 Yrs)"
                titleColor="#7c3aed"
                badgeBg="bg-gradient-to-r from-purple-500 to-violet-600"
                badgeColor="text-white"
                rows={[
                  { duration: '1 hour', price: '450 INR' },
                  { duration: '30 minutes', price: '250 INR' },
                ]}
              />

              <PricingTable
                title="INFLATABLE"
                titleColor="#2563eb"
                badgeBg="bg-gradient-to-r from-blue-500 to-cyan-600"
                badgeColor="text-white"
                rows={[
                  { duration: '1 hour', price: '450 INR' },
                  { duration: '30 minutes', price: '250 INR' },
                ]}
              />

              <SingleRowTable
                title="FOOD & BEVERAGES"
                titleColor="#dc2626"
                badgeBg="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500"
                badgeColor="text-white"
                duration="Per Item"
                price="On MRP"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-10 mt-4">
            <div className="relative rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden" style={{
              background: 'linear-gradient(135deg, rgba(30,64,175,0.4) 0%, rgba(30,58,138,0.6) 100%)',
              border: '2px solid rgba(147,197,253,0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1" style={{
                background: 'linear-gradient(90deg, #f59e0b, #ef4444, #a855f7, #3b82f6, #10b981)'
              }}></div>

              <h2 className="text-3xl md:text-5xl font-black text-center uppercase mb-8 md:mb-12 tracking-wide" style={{
                color: 'white',
                textShadow: '0 2px 15px rgba(0,0,0,0.4)'
              }}>
                PLAN YOUR EVENT
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                {[
                  { type: 'birthday', label: 'Birthday Party', color: 'from-pink-500 to-rose-500' },
                  { type: 'school', label: 'School Events', color: 'from-cyan-500 to-blue-500' },
                  { type: 'corporate', label: 'Corporate Events', color: 'from-indigo-500 to-purple-500' },
                  { type: 'kitty', label: 'Kitty Party', color: 'from-emerald-500 to-teal-500' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 md:gap-5 p-4 md:p-6 rounded-2xl transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl group"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)'
                    }}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6`}>
                      <EventIcon type={item.type} />
                    </div>
                    <span className="text-white font-black text-xl md:text-3xl uppercase tracking-wide group-hover:text-yellow-300 transition-colors">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-2" style={{
                background: 'linear-gradient(90deg, #ef4444, #f59e0b, #eab308, #22c55e, #3b82f6, #8b5cf6)'
              }}></div>

              <div className="px-6 md:px-10 pt-8 md:pt-10 pb-8 md:pb-10">
                <div className="text-center mb-6 md:mb-8">
                  <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-300 text-gray-800 font-black text-lg md:text-xl tracking-wider uppercase">
                    Terms & Conditions
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-5 md:mb-6 text-center border-b-2 border-dashed border-gray-300 pb-3">
                  TERMS & ADMISSION POLICY
                </h3>

                <ul className="space-y-3 md:space-y-4">
                  {[
                    'Grip socks are mandatory for trampoline parks - Buy from Rs. 80/-',
                    'Above mentioned prices are inclusive of 18% GST',
                    'Weekend and special day prices are applicable as mentioned and subject to change',
                    'Right to admission reserved',
                    'New entry starts in every 30 minutes',
                  ].map((term, idx) => (
                    <li key={idx} className="flex items-start gap-3 md:gap-4">
                      <span className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center mt-0.5 font-black text-xs md:text-sm text-white" style={{
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                      }}>
                        {idx + 1}
                      </span>
                      <span className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
                        {term}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="h-1 w-full mt-8 md:mt-10 rounded-full" style={{
                  background: 'linear-gradient(90deg, #facc15, #eab308, #facc15)'
                }}></div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-6 md:mt-8">
                  <a href="mailto:bounceandplay2024@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-base md:text-lg">bounceandplay2024@gmail.com</span>
                  </a>
                  <a href="tel:+919468578138" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-bold text-lg md:text-xl">+91-9468578138</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 40%, #0369a1 100%)'
            }}>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)'
                }}></div>
              </div>

              <div className="relative p-6 md:p-10">
                <div className="text-center mb-8 md:mb-10">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-2" style={{
                    color: 'white',
                    textShadow: '0 4px 25px rgba(0,0,0,0.4)',
                    WebkitTextStroke: '2px rgba(0,0,0,0.15)'
                  }}>
                    CALL US TO BOOK{' '}
                    <span className="text-yellow-300" style={{ WebkitTextStroke: '2px rgba(161,98,7,0.3)' }}>NOW!</span>
                  </h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-10">
                  <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8 flex-1">
                    <a href="tel:+919468578138" className="group">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]" style={{
                        background: 'linear-gradient(135deg, #a855f7, #7c3aed)'
                      }}>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </a>

                    <a href="mailto:bounceandplay2024@gmail.com" className="group">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]" style={{
                        background: 'linear-gradient(135deg, #f97316, #ea580c)'
                      }}>
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </a>

                    <a href="https://wa.me/919468578138" target="_blank" rel="noopener noreferrer" className="group">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]" style={{
                        background: 'linear-gradient(135deg, #22c55e, #16a34a)'
                      }}>
                        <svg className="w-9 h-9 md:w-11 md:h-11 text-white" viewBox="0 0 32 32" fill="currentColor">
                          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215a.41.41 0 00-.138-.288c-.101-.071-.487-.187-.756-.287zm-3.532C9.02 15.817 7.3 14.088 7.3 11.894 7.3 9.08 9.498 6.664 12.312 6.664c1.38 0 2.682.53 3.66 1.494.976.962 1.527 2.245 1.527 3.597 0 2.924-2.197 6.245-5.36 8.171l-.016-.01zM12.312 4C8.14 4 4.79 7.238 4.79 11.177c0 3.18 2.358 6.063 5.982 7.838l-.56 1.73 1.908-1.004c.685.195 1.356.326 2.015.396.118.012.23.02.345.02 4.17 0 7.523-3.237 7.523-7.177C22.004 7.238 18.655 4 12.313 4z"/>
                        </svg>
                      </div>
                    </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
                      <div className="bg-white rounded-xl p-3 md:p-4 border-2 border-gray-100">
                        <Image
                          src="/assets/QR.jpeg"
                          alt="Google Review QR Code"
                          width={150}
                          height={150}
                          className="w-32 h-32 md:w-40 md:h-40 object-contain"
                        />
                      </div>
                      <div className="text-center mt-3 mb-2">
                        <span className="text-sm md:text-base font-bold text-gray-700">Scan to Rate Us</span>
                      </div>
                      <div className="flex justify-center items-center gap-1 mb-2">
                        <span className="font-black text-gray-800 text-lg">Google</span>
                        <div className="flex ml-2">
                          {[1,2,3,4,5].map(i => (
                            <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-sm md:text-base">bounceandplay2024@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="font-bold text-base md:text-lg">+91-9468578138</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
