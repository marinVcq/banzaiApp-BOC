// components/Header.js

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-10 h-16 flex items-center justify-between">

        <Link href="/">
            <Image src="/images/logo.png" alt="Logo Banzai" width={100} height={40} />
        </Link>

        <div className='flex gap-4 items-center'>
          <Link href="/">Dashboard</Link>
          <Link href="/caisse">Caisse</Link>
          <Link href="/stock">Stock</Link>
          <Link href="/statistique">Statistique</Link>
          <Link href="/parametre">Parametre</Link>
            <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 rounded-md w-40"
              />

            <button className="bg-red-600 w-32 text-white px-3 py-1 rounded-md hover:bg-red-700">
              Deconnexion
            </button>
        </div>
    </header>
  );
};

export default Header;
