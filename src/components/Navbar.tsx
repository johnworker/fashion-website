import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <a className="text-2xl font-bold">BrandLogo</a>
        </Link>
        <div className="space-x-6">
          <Link href="/products"><a>新品上市</a></Link>
          <Link href="/about"><a>關於我們</a></Link>
          <Link href="/cart"><a>購物車</a></Link>
        </div>
      </div>
    </nav>
  );
}
