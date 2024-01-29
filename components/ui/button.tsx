import React from "react";
import Link from "next/link";
export default function Button({ text, url }: { text: string; url: string }) {
  return (
    <Link href={url}>
      <button
        type="button"
        className="py-3 px-4 inline-flex justify-center items-center gap-2 backdrop-blur transition rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none text-sm dark:bg-zinc-900 dark:hover:border-white/20 dark:border-rose-500 dark:text-rose-500 "
      >
        {text}
      </button>
    </Link>
  );
}
