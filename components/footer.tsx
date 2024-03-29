"use client";
import Image from "next/image";
import Divider from "./ui/divider";
export default function Footer() {
  return (
    <div className="py-5">
      <Divider margin={2} />

      <p className="flex flex-row py-5 text-gray-400">
        <span>
          Built in
          <a href="https://code.visualstudio.com/" target="__blank">
            <Image
              src="/logos/vscode.svg"
              alt="Visual Studio Code Logo"
              width={0}
              height={0}
              priority={false}
              style={{ width: "25px", height: "auto" }}
              className="mx-1 inline"
            />
          </a>
          <span className="border-l-2 border-zinc-300 px-1">Built with</span>
          <a href="https://nextjs.org" target="__blank">
            <Image
              src="/logos/nextjs.svg"
              alt="Next.js Logo"
              width={0}
              height={0}
              priority={false}
              style={{ width: "25px", height: "auto" }}
              className=" mx-1 inline bg-white rounded-full"
            />
          </a>
          <a href="https://tailwindcss.com" target="__blank">
            <Image
              src="/logos/tailwind.svg"
              alt="Tailwind CSS Logo"
              width={0}
              height={0}
              priority={false}
              style={{ width: "25px", height: "auto" }}
              className="mx-1 inline"
            />
          </a>
        </span>
      </p>
    </div>
  );
}
