import { fetchNews } from '../lib/newsApi';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 7200; // Revalider toutes les 2 heures

export default async function Home() {
  const articles = await fetchNews('general');
  const latestArticles = articles.slice(0, 6);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">
                {new Date().toLocaleDateString('fr-FR', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="animate-pulse flex items-center gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                LIVE
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="hover:text-blue-200">🌍 FR</button>
              <button className="hover:text-blue-200">🔔</button>
            </div>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg transform group-hover:rotate-12 transition">
                <span className="text-2xl">📡</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ActuPro Global
                </h1>
                <p className="text-xs text-gray-500">L'info en temps réel</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <Link href="/" className="hover:text-blue-600 font-medium transition">
                🏠 Accueil
              </Link>
              <Link href="/actualites" className="hover:text-blue-600 font-medium transition">
                📰 Actualités
              </Link>
              <Link href="/politique" className="hover:text-blue-600 font-medium transition">
                🏛️ Politique
              </Link>
              <Link href="/finance" className="hover:text-blue-600 font-medium transition">
                💰 Finance
              </Link>
              <Link href="/digital" className="hover:text-blue-600 font-medium transition">
                💻 Digital
              </Link>
            </div>

            <button className="lg:hidden text-2xl">☰</button>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="gradient-bg text-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <span className="text-xl">🤖</span>
              <span className="text-sm font-medium">Propulsé par l'IA • Mises à jour toutes les 2h</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Restez Informé,<br />Restez en Avance
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100">
              Actualités mondiales • Analyses IA • 100% Gratuit
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#actualites"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-2xl transform hover:scale-105"
              >
                📰 Explorer les Actualités
              </Link>
              <button className="bg-white/20 backdrop-blur-md border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition">
                🤖 Analyses IA
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </section>

      {/* STATS */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { icon: '📰', value: '500+', label: 'Actualités/jour' },
            { icon: '🤖', value: '100%', label: 'Analyses IA' },
            { icon: '🌍', value: '6', label: 'Langues' },
            { icon: '⚡', value: '2h', label: 'Mise à jour' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center transform hover:scale-105 transition"
            >
              <div className="text-4xl sm:text-5xl mb-3">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DERNIÈRES ACTUALITÉS */}
      <section id="actualites" className="container mx-auto px-4 py-12 sm:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">📌 Dernières Actualités</h2>
            <p className="text-gray-500">
              Mis à jour : {new Date().toLocaleDateString('fr-FR')} à {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          <Link
            href="/actualites"
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
          >
            Voir tout
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {latestArticles.map((article, index) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-48 sm:h-56 bg-gray-200 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase shadow-lg">
                  {article.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Il y a {Math.floor(Math.random() * 5) + 1}h
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {article.views.toLocaleString()}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3.5rem]">
                  {article.title}
                </h3>

                <p className="text-gray-600 line-clamp-3 mb-4 text-sm">
                  {article.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-700 truncate">
                    {article.source}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 hover:bg-gray-100 rounded-full transition"
                      title="Sauvegarder"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                    <button
                      className="p-2 hover:bg-gray-100 rounded-full transition"
                      title="Partager"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CATÉGORIES */}
      <section className="bg-white py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            📚 Explorer par Catégorie
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Politique', icon: '🏛️', color: 'from-red-500 to-pink-500', href: '/politique' },
              { name: 'Finance', icon: '💰', color: 'from-green-500 to-emerald-500', href: '/finance' },
              { name: 'Digital', icon: '💻', color: 'from-purple-500 to-indigo-500', href: '/digital' },
              { name: 'Géopolitique', icon: '🌍', color: 'from-blue-500 to-cyan-500', href: '/geopolitique' },
            ].map((category, i) => (
              <Link
                key={i}
                href={category.href}
                className="group relative overflow-hidden bg-gradient-to-br rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm">Dernières actualités</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                    Découvrir
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="gradient-bg text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-4xl sm:text-5xl">📧</span>
                <div className="text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold">Restez Informé</h2>
                  <p className="text-blue-100 text-sm sm:text-base">Newsletter quotidienne gratuite</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-blue-100">
                Recevez les actualités les plus importantes directement dans votre boîte mail
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 text-base"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-lg whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>

            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Mises à jour quotidiennes
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Pas de spam
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Désabonnement facile
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">📡</span>
                <span className="text-xl font-bold">ActuPro Global</span>
              </div>
              <p className="text-gray-400 text-sm">
                L'actualité mondiale en temps réel avec analyse IA.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Catégories</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/actualites" className="text-gray-400 hover:text-white transition">Actualités</Link></li>
                <li><Link href="/politique" className="text-gray-400 hover:text-white transition">Politique</Link></li>
                <li><Link href="/finance" className="text-gray-400 hover:text-white transition">Finance</Link></li>
                <li><Link href="/digital" className="text-gray-400 hover:text-white transition">Digital</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">À propos</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white transition">Carrières</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Confidentialité</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Conditions</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition">Cookies</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 ActuPro Global. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
