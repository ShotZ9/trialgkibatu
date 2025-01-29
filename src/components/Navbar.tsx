import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">GKI Batu</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/tentang">Tentang Kami</Link></li>
          <li><Link href="/jadwal">Jadwal Ibadah</Link></li>
          <li><Link href="/artikel">Artikel</Link></li>
          <li><Link href="/galeri">Galeri</Link></li>
          <li><Link href="/kontak">Kontak</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
