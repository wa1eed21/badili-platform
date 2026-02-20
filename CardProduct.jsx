"use client";
import React from "react";
export default function CardProduct({ product }) {
  const { experience_match, value_for_money, savings_percentage } = product.badili_index;
  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-bold text-lg mb-2">{product.name}</h2>
      <div className="text-sm mb-2">
        <p>تجربة مكافئة: {experience_match}%</p>
        <p>قيمة مقابل السعر: {value_for_money}%</p>
        <p>توفير: {savings_percentage}%</p>
      </div>
      <div className="flex gap-2 mt-2">
        <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-1 rounded">مقارنة</button>
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-1 rounded">شراء</button>
      </div>
    </div>
  );
}