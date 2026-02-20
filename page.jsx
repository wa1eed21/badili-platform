import React from "react";
import headphonesData from "../data/headphones.json";
import CardProduct from "../components/CardProduct";
import Header from "../components/Header";
export default function HomePage() {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <Header />
      <main className="p-6">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">أفضل بدائل المنتجات الذكية</h1>
          <p className="mb-4">ابحث عن سماعات، جوالات، أجهزة منزلية والمزيد مع Badili Index</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">سماعات</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {headphonesData.map(product=><CardProduct key={product.slug} product={product} />)}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">الأقسام الأخرى</h2>
          <div className="flex gap-4">
            <span className="opacity-50 cursor-not-allowed">جوالات (قريبًا)</span>
            <span className="opacity-50 cursor-not-allowed">أجهزة منزلية (قريبًا)</span>
            <span className="opacity-50 cursor-not-allowed">عناية وجمال (قريبًا)</span>
          </div>
        </section>
      </main>
    </div>
  );
}
