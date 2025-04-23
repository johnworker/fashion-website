import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-4">
        <Carousel images={['/images/banner1.jpg','/images/banner2.jpg']} />
        <section className="mt-8">
          <h2 className="text-3xl font-semibold">本季熱銷</h2>
          {/* 可用 ProductCard 列出幾件商品 */}
        </section>
      </main>
      <Footer />
    </>
  );
}
