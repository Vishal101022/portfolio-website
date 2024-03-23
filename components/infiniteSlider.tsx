"use client";
import {
  TbBrandHtml5,
  TbBrandFramerMotion,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandMysql,
  TbBrandTailwind,
} from "react-icons/tb";
const LOGOS = [
  {
    logo: (
      <TbBrandHtml5 className="text-5xl text-slate-800 dark:text-slate-300" />
    ),
  },
  {
    logo: (
      <TbBrandCss3
        width={30}
        height={30}
        className="text-5xl text-slate-800 dark:text-slate-300"
      />
    ),
  },
  {
    logo: (
      <TbBrandJavascript
        width={25}
        height={25}
        className="text-5xl text-slate-800 dark:text-slate-300"
      />
    ),
  },
  {
    logo: (
      <TbBrandReact
        width={25}
        height={25}
        className="text-5xl text-slate-800 dark:text-slate-300"
      />
    ),
  },
  {
    logo: (
      <TbBrandNextjs
        width={25}
        height={25}
        className="text-5xl text-slate-800 dark:text-slate-300"
      />
    ),
  },
  {
    logo: (
      <TbBrandMysql
        width={25}
        height={25}
        className="text-5xl text-slate-800 dark:text-slate-300"
      />
    ),
  },
  {
    logo: (
      <TbBrandTailwind
        width={25}
        height={25}
        className="text-5xl text-slate-800 dark:text-slate-300"
      />
    ),
  },
  {
    logo: (
      <TbBrandFramerMotion
        width={25}
        height={25}
        className="text-5xl text-slate-800 dark:text-slate-300"
      />
    ),
  },
];

export default function InfiniteSlider() {
  return (
    <div className="relative m-auto w-full overflow-hidden">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((item, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {item.logo}
          </div>
        ))}
        {LOGOS.map((item, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {item.logo}
          </div>
        ))}
      </div>
    </div>
  );
}
