"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userData } from "@/lib/data";
import { AvailabilityStatus } from "./ui/Availability";
import ThemeSwitch from "./themeSwitch";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="py-10 md:py-20 ">
      <div className="flex  md:flex-row justify-between items-center">
        {/* nav header */}
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl text-gray-800 dark:text-gray-300">
              {userData.name}
            </h1>
          </Link>
          {/* <AvailabilityStatus isAvailable={userData.availability} /> */}
        </div>
        {/* navigation links for large screens*/}
        <div className="space-x-8 hidden md:block border-2 shadow-sm shadow-zinc-800/5 border-zinc-900/5 dark:border-white/5 rounded-lg px-4 py-1.5">
          {/* about */}
          <Link
            href="/about"
            className={`text-base  ${
              pathname === "/about"
                ? "text-rose-500 font-bold"
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
                ? "text-rose-500 font-bold "
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
                ? "text-rose-500 font-bold"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Experience
          </Link>
        </div>
        <div className="space-x-4 flex flex-row items-center">
          {/* Dark themes */}
          <ThemeSwitch />
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
