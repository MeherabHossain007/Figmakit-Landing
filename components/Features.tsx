import React from 'react';
import { FEATURES } from '../constants';
import { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
    return (
        <div className="bg-off-white p-8 rounded-2xl text-center flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-white/60 rounded-full p-4 mb-6">
                {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-deep-charcoal mb-2">{feature.title}</h3>
            <p className="text-slate-gray">{feature.description}</p>
        </div>
    );
};

const Features: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal tracking-tight">An Entire Design System in Your Pocket</h2>
                    <p className="mt-4 text-lg text-slate-gray max-w-2xl mx-auto">
                        FigmaKit is more than just a component library. It's a complete system for building beautiful, consistent, and scalable user interfaces.
                    </p>
                </div>
                <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((feature) => (
                        <FeatureCard key={feature.title} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
