import { useRouter } from 'next/router';
import { products } from '@/lib/products';
import { Product } from '@/lib/products';

export default function ProductDetail() {
  const { query } = useRouter();
  const product = products.find((p: Product) => p.id === query.id);

  if (!product) return <p>找不到該商品</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img src={product.image} alt={product.name} className="w-full" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-xl text-red-600 mt-2">{product.price} TWD</p>
      {/* 加入購物車按鈕等 */}
    </div>
  );
}
