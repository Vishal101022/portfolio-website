"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="dark:bg-gray-900">
      <div className="h-0.5 w-full bg-zinc-300 dark:bg-gray-700"></div>

      <p className="flex flex-row py-5 text-gray-400">
        <span>
          Built in
          <a href="https://code.visualstudio.com/" target="__blank">
            <Image
              src="/logos/vscode.svg"
              alt="Visual Studio Code Logo"
              width={25}
              height={25}
              className="mx-1 inline"
            />
          </a>
          <span className="border-l-2 border-zinc-300 pl-2">Built with</span>
          <a href="https://nextjs.org" target="__blank">
            <Image
              src="/logos/nextjs.svg"
              alt="Next.js Logo"
              width={25}
              height={25}
              className=" mx-1 inline"
            />
          </a>
          <a href="https://tailwindcss.com" target="__blank">
            <Image
              src="/logos/tailwind.svg"
              alt="Tailwind CSS Logo"
              width={25}
              height={25}
              className="mx-1 inline"
            />
          </a>
        </span>
      </p>
    </div>
  );
}
