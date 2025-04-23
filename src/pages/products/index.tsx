import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
