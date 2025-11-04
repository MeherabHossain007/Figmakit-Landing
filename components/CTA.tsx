import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-gradient-to-r from-figma-purple to-soft-accent rounded-3xl p-12 md:p-20 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Ready to Transform Your Design Workflow?
                    </h2>
                    <p className="mt-4 text-lg text-purple-100/90 max-w-2xl mx-auto">
                        Join thousands of designers using FigmaKit to create beautiful products, faster than ever before.
                    </p>
                    <div className="mt-10">
                        <a href="#" className="inline-block bg-white text-figma-purple px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Get FigmaKit Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
