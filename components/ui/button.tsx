import React from "react";
import Link from "next/link";
export default function Button({ text, url }: { text: string; url: string }) {
  return (
    <Link href={url}>
      <button
        type="button"
        className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-rose-100 text-rose-600 inline-block"
      >
        <span className="absolute top-0 left-0 flex h-full w-0 mb-0 transition-all duration-300 ease-out  bg-rose-600 group-hover:w-full opacity-90"></span>
        <span className="relative group-hover:text-white">{text}</span>
      </button>
    </Link>
  );
}
