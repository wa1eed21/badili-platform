"use client";
import { useEffect, useState } from "react";
export default function DarkModeToggle() {
  const [dark,setDark]=useState(false);
  useEffect(()=>{if(dark)document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");},[dark]);
  return (
    <button onClick={()=>setDark(!dark)} className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600">{dark?"☀️":"🌙"}</button>
  );
}