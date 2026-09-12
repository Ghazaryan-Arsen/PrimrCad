import React, { useState } from 'react';
import { Layers, Eye, X, Image as ImageIcon, ChevronDown } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/landingData';
import { PortfolioItem } from '../types';

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'instructor'>('student');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);
  // Limit mobile items initially to 3 cards to keep mobile page length concise
  const displayedItems = showAllMobile ? filteredItems : filteredItems.slice(0, 3);

  return (
    <section id="portfolio" className="py-12 sm:py-20 bg-white border-y border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-prime-navy/10 border border-prime-navy/20 text-prime-navy text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>3D CAD Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-prime-dark tracking-tight mb-2 sm:mb-3">
            Աշխատանքների Պորտֆոլիո
          </h2>
          <p className="text-xs sm:text-base text-gray-600">
            Ծանոթացեք ուսանողների և դասավանդողի 3D CAD մոդելներին, wireframe-ներին և ռենդերներին։
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-2xl bg-gray-100 border border-gray-200">
            <button
              onClick={() => {
                setActiveTab('student');
                setShowAllMobile(false);
              }}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'student'
                  ? 'bg-prime-navy text-white shadow-sm'
                  : 'text-gray-600 hover:text-prime-dark'
              }`}
            >
              Ուսանողների աշխատանքներ
            </button>
            <button
              onClick={() => {
                setActiveTab('instructor');
                setShowAllMobile(false);
              }}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'instructor'
                  ? 'bg-prime-navy text-white shadow-sm'
                  : 'text-gray-600 hover:text-prime-dark'
              }`}
            >
              Դասավանդողի աշխատանքներ
            </button>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-prime-warm-white border border-gray-200/80 hover:border-prime-navy/40 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 shadow-sm flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] bg-prime-navy/95 border-b border-gray-200 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-prime-muted">
                    <div className="w-14 h-14 rounded-full bg-prime-dark border border-prime-gold/30 flex items-center justify-center mb-2 text-prime-gold">
                      <ImageIcon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-white mb-0.5">
                      Replaceable CAD Visual
                    </span>
                    <span className="text-[10px] text-prime-muted font-mono">
                      /assets/portfolio/{item.id}.jpg
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-prime-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="bg-prime-gold text-prime-dark font-bold text-xs px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span> Preview</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-5">
                <span className="text-[10px] uppercase font-extrabold text-amber-700 tracking-wider block mb-1">
                  {item.category === 'student' ? 'Ուսանողական նախագիծ' : 'Դասավանդողի աշխատանք'}
                </span>
                <h3 className="text-base font-bold text-prime-dark mb-1 group-hover:text-prime-navy transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  {item.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded bg-gray-200/80 text-gray-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Expand Button */}
        {!showAllMobile && filteredItems.length > 3 && (
          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => setShowAllMobile(true)}
              className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-300 text-prime-dark font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <span>Տեսնել ավելին ({filteredItems.length - 3})</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Lightbox / Modal Preview */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-gray-200 rounded-3xl max-w-xl w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:text-prime-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
              {selectedItem.category === 'student' ? 'Ուսանողական CAD Աշխատանք' : 'Դասավանդողի CAD Աշխատանք'}
            </span>
            <h3 className="text-xl font-bold text-prime-dark mb-1">
              {selectedItem.title}
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              {selectedItem.subtitle}
            </p>

            <div className="aspect-[4/3] w-full bg-prime-navy border border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-white mb-5">
              <ImageIcon className="w-12 h-12 text-prime-gold mb-3" />
              <span className="text-xs font-bold mb-1">
                Full-Resolution CAD Render Preview
              </span>
              <span className="text-[10px] text-prime-muted font-mono">
                Asset: /assets/portfolio/{selectedItem.id}-hd.jpg
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {selectedItem.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-0.5 rounded-lg bg-gray-100 text-prime-navy font-bold border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="bg-prime-navy text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-prime-navy/90 transition-colors"
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
