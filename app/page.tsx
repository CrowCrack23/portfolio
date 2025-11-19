export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
            <span className="text-lg sm:text-xl font-bold text-slate-800">Selfish</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#servicios" className="text-slate-600 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#beneficios" className="text-slate-600 hover:text-blue-600 transition-colors">Beneficios</a>
            <a href="#contacto" className="text-slate-600 hover:text-blue-600 transition-colors">Contacto</a>
          </div>
          <a href="#contacto" className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base">
            Comenzar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                Soluciones Digitales Innovadoras
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight px-2">
              Transformamos tus ideas en{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                realidad digital
              </span>
          </h1>
            <p className="text-base sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-12 leading-relaxed px-2">
              Desarrollo de software a medida y automatización de procesos que impulsan el crecimiento de tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a href="#contacto" className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all hover:shadow-lg hover:scale-105">
                Solicitar Consulta Gratuita
              </a>
              <a href="#servicios" className="bg-white hover:bg-slate-50 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium border-2 border-slate-200 transition-all">
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-12 sm:mt-20 relative">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Development */}
                <div className="flex flex-col items-center text-center p-4 sm:p-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">Desarrollo</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">Código de calidad</p>
                </div>

                {/* Automation */}
                <div className="flex flex-col items-center text-center p-4 sm:p-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">Automatización</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">Procesos eficientes</p>
                </div>

                {/* Growth */}
                <div className="flex flex-col items-center text-center p-4 sm:p-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">Crecimiento</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">Resultados medibles</p>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-300 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-pink-300 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-2">
              Nuestros Servicios
            </h2>
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Soluciones tecnológicas diseñadas para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Desarrollo de Software</h3>
              <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6">
                Creamos aplicaciones web y móviles personalizadas, escalables y de alto rendimiento para satisfacer las necesidades únicas de tu empresa.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Aplicaciones web modernas</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Apps móviles iOS y Android</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Sistemas empresariales</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-violet-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-violet-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Automatización de Procesos</h3>
              <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6">
                Optimizamos y automatizamos tus procesos empresariales para aumentar la eficiencia, reducir costos y eliminar tareas repetitivas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-violet-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Workflows automatizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-violet-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Integración de sistemas</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-violet-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Reportes y analytics automáticos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-2">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Compromiso con la excelencia y resultados medibles
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Calidad Garantizada</h3>
              <p className="text-sm sm:text-base text-slate-600">
                Código limpio, escalable y probado siguiendo las mejores prácticas de la industria
              </p>
            </div>

            <div className="text-center px-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Entrega Ágil</h3>
              <p className="text-sm sm:text-base text-slate-600">
                Metodologías ágiles para entregas rápidas y adaptación continua a tus necesidades
              </p>
            </div>

            <div className="text-center px-4 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Soporte Continuo</h3>
              <p className="text-sm sm:text-base text-slate-600">
                Acompañamiento completo desde el desarrollo hasta el mantenimiento post-lanzamiento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-base sm:text-xl text-blue-100 mb-8 sm:mb-10 px-4">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a href="mailto:contacto@selfish.com" className="bg-white hover:bg-slate-50 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all hover:shadow-lg hover:scale-105">
              Contactar por Email
            </a>
            <a href="tel:+1234567890" className="bg-blue-500 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium border-2 border-white transition-all">
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
                <span className="text-lg sm:text-xl font-bold text-white">Selfish</span>
              </div>
              <p className="text-sm sm:text-base text-slate-400">
                Desarrollo de software y automatización de procesos empresariales para impulsar tu negocio.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Enlaces</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>Email: contacto@selfish.com</li>
                <li>Ubicación: Cienfuegos, Cuba</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm">&copy; 2025 Selfish. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
