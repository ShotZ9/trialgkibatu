"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/tentang" },
    { name: "Jadwal Ibadah", path: "/jadwal" },
    { name: "Artikel", path: "/artikel" },
    { name: "Galeri", path: "/galeri" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo di Kiri */}
        <div className="flex items-center space-x-3">
          <Image src="/images/logogki.png" alt="Logo GKI" width={40} height={40} />
          <span className="text-xl font-bold">GKI Batu</span>
        </div>

        {/* Menu Navigasi */}
        <ul className="flex space-x-6 text-sm">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              <Link
                href={item.path}
                className={`pb-1 relative transition-all duration-200 
                  after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                  hover:after:scale-x-100 ${pathname === item.path ? "after:scale-x-100" : ""
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
