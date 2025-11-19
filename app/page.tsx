export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
            <span className="text-xl font-bold text-slate-800">Selfish</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#servicios" className="text-slate-600 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#beneficios" className="text-slate-600 hover:text-blue-600 transition-colors">Beneficios</a>
            <a href="#contacto" className="text-slate-600 hover:text-blue-600 transition-colors">Contacto</a>
          </div>
          <a href="#contacto" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
            Comenzar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Soluciones Digitales Innovadoras
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Transformamos tus ideas en{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                realidad digital
              </span>
          </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
              Desarrollo de software a medida y automatización de procesos que impulsan el crecimiento de tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg hover:scale-105">
                Solicitar Consulta Gratuita
              </a>
              <a href="#servicios" className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full text-lg font-medium border-2 border-slate-200 transition-all">
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-12 border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Development */}
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Desarrollo</h3>
                  <p className="text-sm text-slate-500 mt-2">Código de calidad</p>
                </div>

                {/* Automation */}
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Automatización</h3>
                  <p className="text-sm text-slate-500 mt-2">Procesos eficientes</p>
                </div>

                {/* Growth */}
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Crecimiento</h3>
                  <p className="text-sm text-slate-500 mt-2">Resultados medibles</p>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-300 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Soluciones tecnológicas diseñadas para hacer crecer tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Desarrollo de Software</h3>
              <p className="text-slate-600 text-lg mb-6">
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
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-violet-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Automatización de Procesos</h3>
              <p className="text-slate-600 text-lg mb-6">
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
      <section id="beneficios" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Compromiso con la excelencia y resultados medibles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Calidad Garantizada</h3>
              <p className="text-slate-600">
                Código limpio, escalable y probado siguiendo las mejores prácticas de la industria
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Entrega Ágil</h3>
              <p className="text-slate-600">
                Metodologías ágiles para entregas rápidas y adaptación continua a tus necesidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Soporte Continuo</h3>
              <p className="text-slate-600">
                Acompañamiento completo desde el desarrollo hasta el mantenimiento post-lanzamiento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contacto@devautomation.com" className="bg-white hover:bg-slate-50 text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg hover:scale-105">
              Contactar por Email
            </a>
            <a href="tel:+1234567890" className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium border-2 border-white transition-all">
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
                <span className="text-xl font-bold text-white">DevAutomation</span>
              </div>
              <p className="text-slate-400">
                Soluciones digitales innovadoras para impulsar tu negocio al siguiente nivel.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li>Email: contacto@devautomation.com</li>
                <li>Tel: +52 123 456 7890</li>
                <li>Ubicación: Ciudad de México</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p>&copy; 2025 DevAutomation. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
