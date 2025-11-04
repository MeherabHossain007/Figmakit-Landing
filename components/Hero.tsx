import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-5 h-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const Hero: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-charcoal tracking-tighter leading-tight">
                            Design 10x Faster with Professional Components
                        </h1>
                        <p className="mt-6 text-lg text-slate-gray max-w-xl mx-auto lg:mx-0">
                            Pre-built, fully customizable Figma components library built by designers, for designers. Kickstart any project with everything you need to design and develop—fast.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <div className="flex items-center">
                                <div className="flex -space-x-2">
                                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/user1/100/100" alt="User 1" />
                                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/user2/100/100" alt="User 2" />
                                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/user3/100/100" alt="User 3" />
                                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/user4/100/100" alt="User 4" />
                                </div>
                                <div className="ml-4 text-left">
                                    <div className="flex items-center">
                                        <StarIcon className="text-yellow-400" />
                                        <StarIcon className="text-yellow-400" />
                                        <StarIcon className="text-yellow-400" />
                                        <StarIcon className="text-yellow-400" />
                                        <StarIcon className="text-yellow-400" />
                                    </div>
                                    <p className="text-sm text-slate-gray">From 2,200+ reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a href="#" className="w-full sm:w-auto inline-block text-center bg-figma-purple text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-soft-accent transition-all duration-300 transform hover:scale-105">
                                Get Started
                            </a>
                            <a href="#" className="w-full sm:w-auto inline-block text-center bg-white text-slate-gray px-8 py-3 rounded-lg font-semibold text-lg border border-gray-300 hover:border-deep-charcoal hover:text-deep-charcoal transition-colors">
                                View Docs
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:block relative p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl transform -rotate-3"></div>
                        <img src="https://picsum.photos/seed/hero-main/1000/800" alt="Figma Components Showcase" className="relative rounded-2xl shadow-2xl transform rotate-1 transition-transform duration-500 hover:rotate-0 hover:scale-105" />
                         <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white p-4 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-110">
                            <p className="font-semibold mb-2">User Profile Card</p>
                            <img src="https://picsum.photos/seed/hero-card/400/300" alt="Card component" className="rounded-lg"/>
                        </div>
                        <div className="absolute -top-8 -right-8 w-56 bg-white p-4 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-110">
                             <p className="font-semibold mb-2">Dashboard Widgets</p>
                            <img src="https://picsum.photos/seed/hero-widget/400/200" alt="Widget component" className="rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
