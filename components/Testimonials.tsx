import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-5 h-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className="bg-white border border-gray-200/80 p-8 rounded-2xl flex flex-col h-full">
            <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-yellow-400" />)}
            </div>
            <p className="text-slate-gray italic text-lg flex-grow">"{testimonial.quote}"</p>
            <div className="mt-6 flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-14 w-14 rounded-full" />
                <div className="ml-4">
                    <p className="font-semibold text-deep-charcoal">{testimonial.name}</p>
                    <p className="text-slate-gray">{testimonial.role}, {testimonial.company}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal tracking-tight">Loved by Teams Worldwide</h2>
                    <p className="mt-4 text-lg text-slate-gray max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what designers, developers, and product managers are saying about FigmaKit.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial) => (
                        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
