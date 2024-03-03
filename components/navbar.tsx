"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userData } from "@/lib/data";
import ThemeSwitch from "./themeSwitch";

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`text-base ${
        pathname === href
          ? "text-rose-500 font-bold"
          : "text-gray-600 dark:text-gray-300 font-normal"
      }`}
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="py-10 md:py-20 ">
      <div className="flex md:flex-row justify-between items-center">
        {/* brand logo */}
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl text-gray-800 dark:text-gray-300">
              {userData.name}
            </h1>
          </Link>
        </div>
        {/* navigation links for large screens*/}
        <div className="space-x-8 hidden md:block border-2 shadow-sm shadow-zinc-800/5 border-zinc-900/5 dark:border-white/5 rounded-lg px-4 py-1.5">
          <NavLink href="/about" text="About" />
          <NavLink href="/projects" text="Projects" />
          <NavLink href="/experience" text="Experience" />
        </div>
        {/* Dark themes */}
        <div className="space-x-4 flex flex-row items-center">
          <ThemeSwitch />
        </div>
      </div>
      {/* navigation link for mobile screens */}
      <div className="space-x-8 block md:hidden mt-4">
        <NavLink href="/about" text="About" />
        <NavLink href="/projects" text="Projects" />
        <NavLink href="/experience" text="Experience" />
      </div>
    </nav>
  );
};

export default Navbar;
