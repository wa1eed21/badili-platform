"use client";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">بديلي</h1>
      <nav className="flex gap-4">
        <Link href="/category/headphones" className="hover:text-emerald-400">سماعات</Link>
        <span className="opacity-50 cursor-not-allowed">جوالات (قريبًا)</span>
        <span className="opacity-50 cursor-not-allowed">أجهزة منزلية (قريبًا)</span>
        <DarkModeToggle />
      </nav>
    </header>
  );
}