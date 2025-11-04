import React, { useState, useEffect } from 'react';

const Logo = () => (
    <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-figma-purple to-soft-accent"></div>
        <span className="font-bold text-xl text-deep-charcoal">FigmaKit</span>
    </div>
);

const NavLinks: React.FC<{className?: string}> = ({className}) => (
    <nav className={`flex items-center space-x-6 ${className}`}>
        <a href="#" className="text-slate-gray hover:text-deep-charcoal transition-colors">Components</a>
        <a href="#" className="text-slate-gray hover:text-deep-charcoal transition-colors">Docs</a>
        <a href="#" className="text-slate-gray hover:text-deep-charcoal transition-colors">Pricing</a>
        <a href="#" className="text-slate-gray hover:text-deep-charcoal transition-colors">Blog</a>
    </nav>
);

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Logo />
                    <div className="hidden md:block">
                        <NavLinks />
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-slate-gray font-semibold hover:text-deep-charcoal transition-colors">Sign In</a>
                        <a href="#" className="bg-figma-purple text-white px-4 py-2 rounded-lg font-semibold hover:bg-soft-accent transition-all duration-300 transform hover:scale-105">
                            Get Started
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-deep-charcoal focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white pb-4">
                    <NavLinks className="flex flex-col items-start space-y-4 space-x-0 px-4" />
                     <div className="flex flex-col space-y-4 px-4 mt-4 pt-4 border-t border-gray-200">
                        <a href="#" className="text-slate-gray font-semibold hover:text-deep-charcoal transition-colors">Sign In</a>
                        <a href="#" className="bg-figma-purple text-white px-4 py-2 rounded-lg font-semibold hover:bg-soft-accent transition-all duration-300 text-center">
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
