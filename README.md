## Design

My main focus when designing this website was to organize information in a
clear and straightforward way, The website should be functional, with text in place, buttons clickable, and performing their intended tasks. 
Functionality is of the utmost priority. [How to build an effective Dev Portfolio](https://www.joshwcomeau.com/effective-portfolio)💡

---

## Website features and structure

- Built in Next.js - Easy routing and blazing-fast.
- Styled with tailwindcss - Simple classes embedded directly in the HTML
- Uses modern animations like [Framer Motion](https://www.framer.com/motion/) & [Rough Notation](https://roughnotation.com)
- Dark mode support.
- Deployed on Vercel

### The website is divided into 4 pages:

 ![folder_stuc](https://github.com/Vishal101022/portfolio-website/assets/13450751/962050d1-6146-432c-ab9a-e8ae0be4ed2e)

- `/Homepage`: Who you are, what you do,Tech Stack, your latest GitHub Repositories and Contact section
- `/About` : Who you are, what is your Tech Stack and little story
- `/Projects` : Your live projects.
- `/Experience` : Your work experience, Education and Internships

I'm continuously working on it, going to add Blog pages and Resources pages.

---

## Building and workflow

### Tech Stack

While choosing the stack

- `Efficiency` : Priority was placed on rapid deployment, steering clear of tools requiring extensive learning periods. Additionally, tools with excellent documentation were favored for smoother implementation.
- `Enjoyment` : Preference was given to tools that personally appealed to me, as side projects should be enjoyable.

In the end, I settled for Next.js, Tailwind, and Typescript.

### Folder structure

![folder](https://github.com/Vishal101022/portfolio-website/assets/13450751/e6e7fa90-215a-4cc2-bf0d-6976c8ee81e9)

- `/app` is where all the pages/routes reside. I've maintained this folder solely for routing purposes.
- `/components` is where all the components reside.
  - `/ui` directory is designated for components without logic. They are designed to be reusable elements that contribute to the visual aspects of the application, such as buttons, card, loading, etc
- `/content` is where all the blog posts reside.
- `/lib` is designated for libraries, utilities, or other shared code used across the project.
- `/public` is for all static assets such as images and logos.

### Layout

In the layout, I have included the Navbar, MainContent, and Footer components. I did this to establish a root-level layout that accepts children as a prop and includes the Navbar and Footer for all pages.


```js
export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl h-screen m-auto px-6 sm:px-12 py-6">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
```
### Navbar Component

![navbar](https://github.com/Vishal101022/portfolio-website/assets/13450751/e5816a8d-fece-48f2-8d18-6b9a3f96b7b0)

The Navbar is quite straightforward. It's a `flex layout` comprising three flex items: the brand container, navigation links container, and theme container

Navbar also has a button that toggles between `Dark Mode` and `Light Mode`. This is done with the [Next themes](https://www.npmjs.com/package/next-themes) package.

```js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
...

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
          ...
        </div>
        {/* Dark themes */}
        <div className="space-x-4 flex flex-row items-center">
          <ThemeSwitch />
        </div>
      </div>
      {/* navigation link for mobile screens */}
      <div className="space-x-8 block md:hidden mt-4">
        <NavLink href="/about" text="About" />
        ...
      </div>
    </nav>
  );
};
...

```

### Hero Section

![hero](https://github.com/Vishal101022/portfolio-website/assets/13450751/b1b1527a-5195-4d79-a101-52256655e1f4)

Building the hero section was an enjoyable task. Utilizing React Rough Notation for underline highlighting and implementing a call-to-action button redirecting to the about page was particularly exciting. Integrating Rough Notation is straightforward; simply encapsulate the text element within RoughNotationGroup and RoughNotation text elements.

### Projects Section

![projects](https://github.com/Vishal101022/portfolio-website/assets/13450751/1aaf7529-daf4-4bcc-aed4-dadaa2612bd5)

Tailwind grids were employed to align the project cards. On smaller screens, the grid displays a single column layout, while on larger screens, it adjusts to a two-column layout for improved presentation and readability

```js
import Card from "./ui/projectCard";
...
export default function Projects() {
  return (
    <AnimatePage>
      <section>
        <h1 className="text-2xl md:text-4xl font-semibold  text-gray-800 dark:text-gray-200">
          What I&apos;ve been working on
        </h1>
        ...
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index}>
              <Card
                title={project.title}
                ...
                techStack={project.techStack.map((tech) => tech)}
              />
            </div>
          ))}
        </div>
      </section>
    </AnimatePage>
  );
}

```

### Stack Section

![stack](https://github.com/Vishal101022/portfolio-website/assets/13450751/fbe5b61f-0330-420d-8002-488bac8a2b49)

For this section, I've implemented an infinite horizontal slider. Initially, I considered using the [marquee](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee) HTML tag, but due to its deprecation and lack of support in all browsers, I opted for a more robust solution.

Instead of relying on third-party dependencies, I crafted a responsive infinite horizontal slider using Tailwind CSS and react-icons.

### Latest Code

![repo](https://github.com/Vishal101022/portfolio-website/assets/13450751/16bf970f-f0c4-4843-b6b2-ee80f54c1864)

To fetch the latest repository, I utilized the GitHub open-source API. Upon receiving the response, I proceeded to populate the data using the `map` function.

```js
import { Octokit } from "@octokit/core";

export const octokit = new Octokit({
auth: process.env.GITHUB_TOKEN,
});

interface Repository {
id: number;
name: string;
...
}

async function GetRepos(): Promise<Repository[]> {
const response = await octokit.request("GET /users/{owner}/repos", {
owner: "Vishal101022",
headers: {
Accept: "application/vnd.github.v3+json",
"X-GitHub-Api-Version": "2022-11-28",
},
});

const repos: Repository[] = response.data
.map((repo: Repository) => ({
id: repo.id,
name: repo.name,
...
}))
.filter(
(repo: Repository) => new Date(repo.pushed_at) > new Date("2023-11-01")
);
return repos;
}
...
```
---

## Challenges and Learnings:

Implementing a dark mode theme on my website had its challenges. One major issue was flickering, where the color scheme abruptly changed, disrupting the user experience. To fix this, I found a helpful blog by [Dave Gray](https://www.davegray.codes/posts/light-dark-mode-nextjs-app-router-tailwind) , which provided solutions for the flickering problem. By following his advice, I achieved a seamless transition between light and dark modes.

Furthermore, I learned the importance of maintaining visual harmony in both light and dark themes. Balancing the color palette for readability and aesthetics in both modes was crucial for user satisfaction.

Through this project, I've learned firsthand the value of `official documentation` and `tech blogs`. While platforms like YouTube and ChatGPT provide helpful insights, I faced complex issues that didn't have easy fixes. In these instances, turning to official docs and tech blogs was crucial.

Solving problems often meant diving deep into research and persisting until a solution emerged, emphasizing the importance of thorough exploration and perseverance.
