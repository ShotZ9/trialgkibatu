"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang GKI Batu", path: "/tentang" },
    { name: "Jadwal Sepekan", path: "/jadwal" },
    { name: "Sejarah GKI Batu", path: "/sejarah" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/images/gkiwarna.png" alt="Logo GKI" width={40} height={40} />
          <span className="text-xl font-bold">GKI Batu</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              <Link
                href={item.path}
                className={`pb-1 transition-all duration-200 
                  after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                  after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                  hover:after:scale-x-100 ${pathname === item.path ? "after:scale-x-100" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 shadow-md z-50">
          <ul className="flex flex-col text-center py-4">
            {navItems.map((item) => (
              <li key={item.path} className="py-2">
                <Link href={item.path} className="text-white" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
