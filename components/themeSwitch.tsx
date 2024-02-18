"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const handleToggleBtn = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        onClick={handleToggleBtn}
        aria-label="Toggle Dark Mode"
        type="button"
        className="rounded-full bg-white/90  px-3 py-2 shadow-sm shadow-zinc-800/5 ring-1 ring-zinc-900/5  dark:bg-zinc-900/90 dark:ring-rose-500/50 dark:hover:ring-white/20"
      >
        {!mounted && (
          <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={15}
            height={15}
            sizes="15x15"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
            className=" h-4 w-4  animate-pulse bg-gray-700 dark:bg-rose-500"
          />
        )}
        {mounted &&
          (resolvedTheme === "dark" ? (
            <FiSun className="h-4 w-4 text-gray-800 dark:text-rose-500" />
          ) : (
            <FiMoon className="h-4 w-4" />
          ))}
      </button>
    </>
  );
}
