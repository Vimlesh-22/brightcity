"use client";
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'Cleaning', href: '/categories/cleaning' },
  { name: 'Salon at Home', href: '/categories/salon' },
  { name: 'Massage at Home', href: '/categories/massage' },
  { name: 'AC & Appliance Repair', href: '/categories/ac-repair' },
  { name: 'Plumber & Carpenter', href: '/categories/plumber-carpenter' },
  { name: 'Painting & Pest Control', href: '/categories/painting-pest' },
  { name: 'Emergency Services', href: '/categories/emergency' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background text-foreground border-b">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex items-center gap-4">
            <span className="cursor-pointer hover:text-blue-200 transition-colors duration-300 hover:scale-105">Track Order</span>
            <span className="cursor-pointer hover:text-blue-200 transition-colors duration-300 hover:scale-105">Customer Support</span>
            <span className="cursor-pointer hover:text-blue-200 transition-colors duration-300 hover:scale-105">Professional Login</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:text-primary-foreground/80 transition-colors duration-300 hover:scale-105">Login</Link>
            <span className="text-gray-400">|</span>
            <Link href="/register" className="hover:text-primary-foreground/80 transition-colors duration-300 hover:scale-105">Register</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="py-4 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-3xl font-bold text-primary">
              BrightCity
            </Link>
          </div>

          <div className="hidden md:flex flex-grow max-w-xl items-center border border-border rounded-full overflow-hidden bg-background">
            <input
              type="text"
              placeholder="Search for services..."
              className="w-full px-4 py-2 focus:outline-none bg-background text-foreground"
            />
            <button className="bg-primary text-primary-foreground p-2 hover:bg-primary/90 transition-colors">
              <Search size={20} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <ShoppingCart size={24} />
              <span className="font-medium">Cart</span>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background pb-4 px-4 border-t">
          <div className="flex flex-col gap-4">
            <div className="flex w-full items-center border border-border rounded-full overflow-hidden bg-background">
              <input
                type="text"
                placeholder="Search for services..."
                className="w-full px-4 py-2 focus:outline-none bg-background text-foreground"
              />
              <button className="bg-primary text-primary-foreground p-2 hover:bg-primary/90 transition-colors">
                <Search size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <ShoppingCart size={24} />
              <span className="font-medium">Cart</span>
            </div>
            <nav className="flex flex-col gap-2">
              {categories.map((category) => (
                <Link key={category.name} href={category.href} className="text-foreground/80 hover:text-primary py-2 border-b border-border">
                  {category.name}
                </Link>
              ))}
            </nav>
            <div className="border-t pt-4 mt-2 flex flex-col gap-2">
                <span className="cursor-pointer hover:text-primary">Track Order</span>
                <span className="cursor-pointer hover:text-primary">Customer Support</span>
                <span className="cursor-pointer hover:text-primary">Professional Login</span>
            </div>
          </div>
        </div>
      )}

      {/* Category navigation */}
      <nav className="hidden md:block bg-muted py-2 px-4 md:px-8 border-t border-b border-border">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex items-center gap-6 overflow-x-auto">
            {categories.map((category) => (
              <Link key={category.name} href={category.href} className="text-foreground/80 hover:text-primary whitespace-nowrap transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-primary">
                  {category.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
