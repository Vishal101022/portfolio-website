"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userData } from "@/lib/data";
import { AvailabilityStatus } from "./ui/Availability";
import ThemeSwitch from "./themeSwitch";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center">
        {/* nav header */}
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl dark:text-gray-100">
              {userData.name}
            </h1>
          </Link>
          {/* <AvailabilityStatus isAvailable={userData.availability} /> */}
        </div>
        {/* navigation links for large screens*/}
        <div className="space-x-8 hidden md:block">
          {/* about */}
          <Link
            href="/about"
            className={`text-base  ${
              pathname === "/about"
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            About
          </Link>
          {/* projects */}
          <Link
            href="/projects"
            className={`text-base  ${
              pathname === "/projects"
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Projects
          </Link>
          {/* experience */}
          <Link
            href="/experience"
            className={`text-base  ${
              pathname === "/experience"
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Experience
          </Link>
        </div>
        <div className="space-x-4 flex flex-row items-center">
          {/* Dark themes */}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-900/90 dark:ring-rose-500/50 dark:hover:ring-white/20"
          >
            <ThemeSwitch />
          </button>
        </div>
      </div>
      {/* navigation link for mobile screens */}
      <div className="space-x-8 block md:hidden mt-4">
        <Link
          href="/about"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          Projects
        </Link>
        <Link
          href="/experience"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          Experience
        </Link>
      </div>
    </nav>
  );
}
