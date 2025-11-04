import React from 'react';
import { SHOWCASE_ITEMS } from '../constants';
import { ShowcaseItem } from '../types';

const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;

const ShowcaseCard: React.FC<{ item: ShowcaseItem }> = ({ item }) => {
    return (
        <div className="group rounded-2xl overflow-hidden bg-off-white/50 border border-gray-200/80 hover:shadow-xl transition-all duration-300">
            <div className="overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
                <span className="inline-block bg-purple-100 text-figma-purple text-xs font-semibold px-2.5 py-1 rounded-full mb-3">{item.category}</span>
                <h3 className="font-semibold text-lg text-deep-charcoal mb-2">{item.title}</h3>
                <p className="text-slate-gray text-sm mb-4">{item.description}</p>
                <a href="#" className="font-semibold text-figma-purple inline-flex items-center group-hover:text-soft-accent transition-colors">
                    View in Figma <ArrowRightIcon />
                </a>
            </div>
        </div>
    );
};

const Showcase: React.FC = () => {
    return (
        <section className="py-20 bg-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal tracking-tight">See FigmaKit in Action</h2>
                    <p className="mt-4 text-lg text-slate-gray max-w-2xl mx-auto">
                        Explore a selection of our beautifully crafted components. Every element is designed to be flexible and production-ready.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SHOWCASE_ITEMS.map((item) => (
                        <ShowcaseCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
