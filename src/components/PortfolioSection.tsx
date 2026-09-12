import React, { useState } from 'react';
import { Layers, Eye, X, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/landingData';
import { PortfolioItem } from '../types';

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'instructor'>('student');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-prime-navy/30 border-y border-prime-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime-dark border border-prime-gold/30 text-prime-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-prime-gold" />
            <span>3D CAD Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Աշխատանքների Պորտֆոլիո
          </h2>
          <p className="text-base sm:text-lg text-prime-muted">
            Ծանոթացեք ուսանողների և դասավանդողի 3D CAD մոդելներին, wireframe-ներին և ռենդերներին։
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-prime-navy border border-prime-border">
            <button
              onClick={() => setActiveTab('student')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === 'student'
                  ? 'bg-prime-gold text-prime-dark shadow-gold-glow'
                  : 'text-prime-muted hover:text-white'
              }`}
            >
              Ուսանողների աշխատանքներ
            </button>
            <button
              onClick={() => setActiveTab('instructor')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === 'instructor'
                  ? 'bg-prime-gold text-prime-dark shadow-gold-glow'
                  : 'text-prime-muted hover:text-white'
              }`}
            >
              Դասավանդողի աշխատանքներ
            </button>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-prime-card border border-prime-border hover:border-prime-gold/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] bg-prime-dark/90 border-b border-prime-border/50 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-prime-muted group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-prime-navy border border-prime-gold/30 flex items-center justify-center mb-3 text-prime-gold shadow-gold-glow">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-semibold text-white mb-1">
                      Replaceable CAD Visual Placeholder
                    </span>
                    <span className="text-[10px] text-prime-muted">
                      Path: <code>/assets/portfolio/{item.id}.jpg</code>
                    </span>
                  </div>
                )}

                {/* Hover overlay with preview icon */}
                <div className="absolute inset-0 bg-prime-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                  <div className="bg-prime-gold text-prime-dark font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>Մանրամասն Preview</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6">
                <span className="text-[10px] uppercase font-bold text-prime-gold tracking-wider block mb-1">
                  {item.category === 'student' ? 'Ուսանողական նախագիծ' : 'Դասավանդողի աշխատանք'}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-prime-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-prime-muted mb-4">
                  {item.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded bg-prime-navy text-gray-300 border border-prime-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal Preview */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-prime-card border border-prime-border rounded-3xl max-w-2xl w-full p-6 lg:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-prime-navy text-prime-muted hover:text-white transition-colors border border-prime-border"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-prime-gold uppercase tracking-widest block mb-2">
              {selectedItem.category === 'student' ? 'Ուսանողական CAD Աշխատանք' : 'Դասավանդողի CAD Աշխատանք'}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedItem.title}
            </h3>
            <p className="text-xs text-prime-muted mb-6">
              {selectedItem.subtitle}
            </p>

            <div className="aspect-[4/3] w-full bg-prime-dark border border-prime-border rounded-2xl flex flex-col items-center justify-center p-8 text-center mb-6">
              <ImageIcon className="w-16 h-16 text-prime-gold mb-4" />
              <span className="text-sm font-bold text-white mb-1">
                Full-Resolution CAD Render / Wireframe Preview
              </span>
              <span className="text-xs text-prime-muted">
                Replace with final asset: <code>/assets/portfolio/{selectedItem.id}-hd.jpg</code>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-3 py-1 rounded-lg bg-prime-navy text-prime-gold border border-prime-gold/30 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="bg-prime-navy border border-prime-border text-white text-xs font-semibold px-4 py-2 rounded-xl hover:border-prime-gold transition-colors"
              >
                Փակել
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
