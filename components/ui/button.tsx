import React from "react";
import Link from "next/link";
export default function Button({ text, url }: { text: string; url: string }) {
  return (
    <Link href={url}>
      <button
        type="button"
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        {text}
      </button>
    </Link>
  );
}
