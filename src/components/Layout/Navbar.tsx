"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { Search, Star, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State untuk input
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false); // Tutup menu jika di mobile
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Genres", href: "/genres" },
    { name: "A-Z List", href: "/alphabet" },
    { name: "Top Anime", href: "/top" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-onkyo-bg/80 backdrop-blur-md border-b border-onkyo-primary/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Star
              className="w-8 h-8 text-onkyo-primary group-hover:rotate-[144deg] transition-transform duration-500"
              fill="#FF007F"
            />
            <Star className="absolute inset-0 w-8 h-8 text-onkyo-accent opacity-0 group-hover:opacity-100 animate-ping" />
          </div>
          <span className="text-2xl font-black tracking-tighter italic uppercase">
            Ani<span className="text-onkyo-primary">Web</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest hover:text-onkyo-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-onkyo-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Search & Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Bungkus dengan FORM agar bisa Enter untuk search */}
          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Anime..."
              className="bg-onkyo-nav/50 border border-onkyo-secondary/30 focus:border-onkyo-primary rounded-full px-5 py-2 text-xs w-48 focus:w-64 transition-all outline-none"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <Search className="w-4 h-4 text-onkyo-muted group-focus-within:text-onkyo-primary" />
            </button>
          </form>
          <button className="bg-onkyo-primary p-2 rounded-full hover:scale-110 transition-transform">
            <Star size={18} fill="white" className="text-white" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-onkyo-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-onkyo-nav border-b border-onkyo-primary/20 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-black uppercase italic border-b border-onkyo-secondary/10 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="relative mt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="bg-onkyo-bg border border-onkyo-secondary/30 rounded-lg px-4 py-3 w-full outline-none"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <Search className="text-onkyo-primary" />
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
