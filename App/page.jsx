import React from "react";
import { notFound } from "next/navigation";
import headphonesData from "../../../data/headphones.json";
import CardProduct from "../../../components/CardProduct";
import Header from "../../../components/Header";
export default function CategoryPage({ params }) {
  const filteredProducts=headphonesData.filter(p=>p.category===params.slug);
  if(filteredProducts.length===0) return notFound();
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">قسم {params.slug}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product=><CardProduct key={product.slug} product={product} />)}
        </div>
      </main>
    </div>
  );
}
