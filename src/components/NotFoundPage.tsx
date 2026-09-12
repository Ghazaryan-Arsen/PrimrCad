import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-prime-dark text-prime-light flex flex-col justify-between p-4 sm:p-8">
      {/* Top Header */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-prime-navy border border-prime-gold/40 flex items-center justify-center group-hover:border-prime-gold transition-colors">
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
              <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="#FDE197" strokeWidth="6" strokeLinejoin="round" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="#FDE197" strokeWidth="3" strokeOpacity="0.5" />
              <line x1="10" y1="30" x2="90" y2="70" stroke="#FDE197" strokeWidth="3" strokeOpacity="0.5" />
              <circle cx="50" cy="50" r="10" fill="#FDE197" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Prime<span className="text-prime-gold">CAD</span>
          </span>
        </a>
      </header>

      {/* Main 404 Hero Content */}
      <main className="max-w-lg mx-auto w-full text-center my-auto py-12 px-4 bg-prime-card/80 border border-prime-border rounded-3xl shadow-2xl backdrop-blur-md">
        <div className="inline-block text-6xl sm:text-7xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-prime-gold via-prime-gold-hover to-amber-200 mb-4">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Էջը չի գտնվել
        </h1>

        <p className="text-sm text-prime-muted mb-8 leading-relaxed">
          Հնարավոր է՝ հասցեն սխալ է կամ էջը այլևս հասանելի չէ։
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-prime-gold text-prime-dark font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-prime-gold-hover transition-all duration-200 shadow-gold-glow active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Վերադառնալ գլխավոր էջ</span>
        </a>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-prime-muted py-4">
        © {new Date().getFullYear()} PrimeCAD. Բոլոր իրավունքները պաշտպանված են։
      </footer>
    </div>
  );
};
