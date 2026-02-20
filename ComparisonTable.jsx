"use client";
import React from "react";
export default function ComparisonTable({ alternatives, badiliIndex }) {
  return (
    <div className="overflow-x-auto bg-gray-800 text-white rounded-lg p-4">
      <h3 className="text-lg font-bold mb-2">Badili Index</h3>
      <p>تجربة مكافئة: {badiliIndex.experience_match}% | قيمة مقابل السعر: {badiliIndex.value_for_money}% | توفير: {badiliIndex.savings_percentage}%</p>
      <table className="min-w-full mt-4 table-auto border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-600 p-2">الفئة</th>
            <th className="border border-gray-600 p-2">البدائل</th>
            <th className="border border-gray-600 p-2">السعر</th>
            <th className="border border-gray-600 p-2">التقييم</th>
          </tr>
        </thead>
        <tbody>
          {["premium", "mid", "budget"].map(cat => (
            alternatives[cat].map((alt, idx) => (
              <tr key={`${cat}-${idx}`} className="even:bg-gray-700">
                {idx===0 && <td className="border border-gray-600 p-2" rowSpan={alternatives[cat].length}>
                  {cat==="premium"?"Premium":cat==="mid"?"متوسط":"منخفض"}
                </td>}
                <td className="border border-gray-600 p-2">{alt.name}</td>
                <td className="border border-gray-600 p-2">{alt.price} ريال</td>
                <td className="border border-gray-600 p-2">{alt.score}%</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}