import React from 'react';
import { ACCESS_OPTIONS } from '../constants';
import { AccessOption } from '../types';

const AccessCard: React.FC<{ option: AccessOption }> = ({ option }) => {
    return (
        <div className="bg-off-white p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="mb-6">{option.icon}</div>
            <h3 className="text-2xl font-semibold text-deep-charcoal mb-3">{option.title}</h3>
            <p className="text-slate-gray mb-6 flex-grow">{option.description}</p>
            <a href={option.ctaLink} className="w-full bg-white text-deep-charcoal px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:border-deep-charcoal transition-colors">
                {option.ctaText}
            </a>
        </div>
    );
};

const Access: React.FC = () => {
    return (
        <section className="py-20 bg-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal tracking-tight">Get Access to FigmaKit</h2>
                    <p className="mt-4 text-lg text-slate-gray max-w-2xl mx-auto">
                        Choose your preferred way to get the library and start designing faster today.
                    </p>
                </div>
                <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ACCESS_OPTIONS.map((option) => (
                        <AccessCard key={option.title} option={option} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Access;
